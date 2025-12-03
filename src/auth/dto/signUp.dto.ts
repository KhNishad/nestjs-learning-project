import { IsString,IsNotEmpty } from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    phone: string;
    address:string;
    @IsString()
    @IsNotEmpty()
    password:string;
    image:string
}