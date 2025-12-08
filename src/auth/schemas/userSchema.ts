import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})

export class User {
    @Prop({required:true})
    name : string

    @Prop()
    address : string

    @Prop({unique : [true, 'This Number Is Already Used']})
    phone : string

    @Prop()
    image : string

    @Prop({required:true})
    password :string
}

export const userSchema = SchemaFactory.createForClass(User)