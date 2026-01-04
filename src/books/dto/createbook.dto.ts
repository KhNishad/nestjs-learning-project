import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "../schemas/book.schema"
import { User } from "src/auth/schemas/userSchema"

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string
    description: string
    author: string
    image: string
    @IsNumber()
    @IsNotEmpty()
    price: number
    @IsNotEmpty()
    @IsEnum(Category)
    category: Category
    noOfpages: number
    
    @IsEmpty()
    user:User

}