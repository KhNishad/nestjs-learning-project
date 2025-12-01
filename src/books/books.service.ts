import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book.name)
        private bookModel : mongoose.Model<Book>
    ){}

    async findAllBooks(): Promise<Book[]>{
        const books = await this.bookModel.find({})
        return books
    }

    async createBook(book:Book):Promise<Book>{
       const res = await this.bookModel.create(book)
       return res
    }
}
