import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule,  ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true
  }),MongooseModule.forRoot(process.env.MONGO_URI!), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
