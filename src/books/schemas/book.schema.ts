import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/userSchema";


export enum Category {
    ADVENTURE = 'Adventure',
    CLASSIC = 'Classic',
    EPIC = 'Epic',
    FANTASY = 'Fantasy'

}

@Schema({
    timestamps: true,
})


export class Book {
    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    author: string

    @Prop()
    price: number

    @Prop()
    category: Category

    @Prop()
    noOfpages: number

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})
    user: User

}

export const BooksSchema = SchemaFactory.createForClass(Book)