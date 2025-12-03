import { Jwt } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Injectable } from '@nestjs/common';
import { User } from './schemas/userSchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'node_modules/bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {

    constructor(

        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService

    ) { }

    async signUp(dto:SignUpDto) {
        const { name, phone, password, address, image } = dto

        const hashedPass = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            password: hashedPass,
            phone,
            address,
            image
        })

        const token = this.jwtService.sign({ id: user?._id })
        return { token }

    }




}
