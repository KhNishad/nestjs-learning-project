import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({

  imports: [ThrottlerModule.forRoot([
    {
      ttl:2000,
      limit:3
    }
  ]), UsersModule,  ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true
  }),MongooseModule.forRoot(process.env.MONGO_URI!), BooksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
