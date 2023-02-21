import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.entity';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
    @Prop({ required: true })
    street: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    zip: string;

    @Prop({ required: true, ref: User.name })
    user: User;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
