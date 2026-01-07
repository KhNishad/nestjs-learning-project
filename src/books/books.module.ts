import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { BooksSchema } from './schemas/book.schema';
import { AuthModule } from 'src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports:[MongooseModule.forFeature([{name:'Book',schema:BooksSchema}]),AuthModule],
  providers: [BooksService,{
    provide : APP_GUARD,
    useClass : ThrottlerGuard
  }],
  controllers: [BooksController]
})
export class BooksModule {}
