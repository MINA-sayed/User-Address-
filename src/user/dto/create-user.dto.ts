
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AddressDto } from './address.dto';

export class UserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    address: AddressDto;
}