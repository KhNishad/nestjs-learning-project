import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { BooksSchema } from './schemas/book.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[MongooseModule.forFeature([{name:'Book',schema:BooksSchema}]),AuthModule],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
