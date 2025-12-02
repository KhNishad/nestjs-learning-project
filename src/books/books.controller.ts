import { BooksService } from './books.service';
import { Body, Controller, Get, Param, Post, ValidationPipe, Patch, Delete, Query } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/createbook.dto';
import { UpdateBookDto } from './dto/updateBook.dto';
import type  { Query as ExpressQuery } from 'express-serve-static-core'

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }

    @Get()
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.findAllBooks(query)
    }

    @Post('/create')
    async createBook(@Body(ValidationPipe) body: CreateBookDto): Promise<Book> {
        return this.bookService.createBook(body)
    }

    @Get(':id')
    async getBook(@Param('id') id: string): Promise<Book> {
        return this.bookService.findById(id)
    }

    @Patch('/update/:id')
    async updateBook(@Param('id') id: string, @Body(ValidationPipe) body: UpdateBookDto): Promise<Book> {
        return this.bookService.updateBook(id, body)
    }

    @Delete('/delete/:id')
    async deleteBook(@Param('id') id: string): Promise<Book> {
        return this.bookService.deleteById(id)
    }
}
