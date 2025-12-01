import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


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

}

export const  BooksSchema  = SchemaFactory.createForClass(Book)