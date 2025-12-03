import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "../schemas/book.schema"

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string
    description: string
    author: string
    @IsNumber()
    @IsNotEmpty()
    price: number
    @IsNotEmpty()
    @IsEnum(Category)
    category: Category
    noOfpages: number

}