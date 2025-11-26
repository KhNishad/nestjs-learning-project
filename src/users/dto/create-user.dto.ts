import { IsEmail,IsString,IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    phone: string;
    @IsEmail()
    email: string;
    role: string;
    address:string;
    dob: string;
}