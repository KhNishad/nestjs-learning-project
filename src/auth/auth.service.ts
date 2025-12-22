import { Jwt } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './schemas/userSchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'node_modules/bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(

        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService

    ) { }

    async signUp(dto: SignUpDto) {
        const { name, phone, password, address, image, role } = dto

        const hashedPass = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            password: hashedPass,
            phone,
            address,
            image,
            role
        })

        const token = this.jwtService.sign({ id: user?._id, role: user.role, })
        return { token }

    }

    async login(dto: LoginDto) {
        const { phone, password } = dto

        const user = await this.userModel.findOne({ phone })
        if (!user) throw new NotFoundException("User Not Registered")

        const matchPass = await bcrypt.compare(password, user?.password)

        if (!matchPass) throw new UnauthorizedException('Email or password is not right')


        const token = this.jwtService.sign({ id: user?._id, role: user.role, })
        return { token }
    }




}
