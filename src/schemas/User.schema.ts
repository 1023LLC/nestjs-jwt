/* eslint-disable prettier/prettier */



import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({ username: true, required: true })
    username: string;

    @Prop({ required: false })
    displayName?: string;

    @Prop({ required: false })
    avatarUrl?: string;
}


export const UserSchema = SchemaFactory.createForClass(User);