import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { Query  } from 'express-serve-static-core'
import { User } from 'src/auth/schemas/userSchema';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }

    async findAllBooks(query:Query): Promise<Book[]> {
        
        // pagination
        let range = Number(query.pageSize)
        let  currentPage = Number(query.pageIndex) || 1
        let skip = Number(range * (currentPage-1))
        
        // search with keyword
        const keyword = query.keyword? {
           title :{
            $regex: query.keyword,
            $options:'i'
           }
        }:{}        
        const books = await this.bookModel.find({...keyword}).populate('user','_id name').limit(range).skip(skip)
        return books
    }

    async createBook(book: Book,user:User): Promise<Book> {
        const res = await this.bookModel.create({...book,user:user._id})
        return res
    }

    async findById(id: string): Promise<Book> {

        const isValidId = mongoose.isValidObjectId(id)
        if(!isValidId) throw new BadRequestException('Please Provide correct Id')
        const res = await this.bookModel.findById(id)
        if (!res) throw new NotFoundException('Book is Not Found!')
        return res
    }

    async updateBook(id: string, body: Book): Promise<Book> {
        const res = await this.bookModel.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
        if (!res) throw new NotFoundException('Failed t o Update')
        return res
    }

    async deleteById(id: string): Promise<Book> {
        const res = await this.bookModel.findByIdAndDelete(id)
        if (!res) throw new NotFoundException('Book is Not Found!')
        return res
    }
}
