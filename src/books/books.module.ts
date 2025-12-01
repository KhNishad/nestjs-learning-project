import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { BooksSchema } from './schemas/book.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Book',schema:BooksSchema}])],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
