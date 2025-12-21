import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "../schemas/book.schema"
import { User } from "src/auth/schemas/userSchema"

export class UpdateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string
    description: string
    author: string
    @IsNumber()
    @IsNotEmpty()
    price: number
    @IsString()
    @IsNotEmpty()
    category: Category
    noOfpages: number

    @IsEmpty()
    user: User

}