import { BooksService } from './books.service';
import { Body, Controller ,Get, Post} from '@nestjs/common';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
    constructor(private bookService : BooksService){}

    @Get()
    async getAllBooks():Promise<Book[]>{
        return this.bookService.findAllBooks()
    }

    @Post('/create')
    async createBook(@Body() body:Book):Promise<Book>{
        return this.bookService.createBook(body)
    }
}
