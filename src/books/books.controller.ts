import { BooksService } from './books.service';
import { Body, Controller, Get, Param, Post, ValidationPipe, Patch, Delete, Query, UseGuards, Req, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/createbook.dto';
import { UpdateBookDto } from './dto/updateBook.dto';
import type { Query as ExpressQuery } from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }

    @Get()
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.findAllBooks(query)
    }

    @Post('/create')
    @Roles('admin')
    @UseGuards(AuthGuard(), RolesGuard)
    async createBook(@Body(ValidationPipe) body: CreateBookDto, @Req() req): Promise<Book> {
        return this.bookService.createBook(body, req.user)
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

    @Put('upload/:id')
    @UseInterceptors(FilesInterceptor('files', 10, {
        storage: diskStorage({
            destination: './images', 
            filename: (req, file, cb) => {
                const unique =
                    Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, unique + extname(file.originalname));
            },
        }),
    }),)
    async uploadImage(
        @Param('id') id: string,
        @UploadedFiles() files: Array<Express.Multer.File>,
    ) {
       
        return this.bookService.handleUploadedImages(id,files)
    }
}
