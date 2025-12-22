import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})

export class User extends Document {
    @Prop({ required: true })
    name: string

    @Prop()
    address: string

    @Prop({ unique: [true, 'This Number Is Already Used'] })
    phone: string

    @Prop()
    image: string

    @Prop({ required: true })
    password: string

    @Prop({ enum: ['admin', 'user','emp'], default: 'user' })
    role: string;

}

export const userSchema = SchemaFactory.createForClass(User)