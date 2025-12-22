import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { userSchema } from './schemas/userSchema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory : (config:ConfigService)=>{
        return {
          secret: config.get<string>('JWT_SECRET'),
          options:{
            expiresIn : config.get<string>('JWT_EXPIRE')
          }
        }
      }
    }),
    MongooseModule.forFeature([{name:'User',schema:userSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[PassportModule,JwtStrategy]
})
export class AuthModule {}
