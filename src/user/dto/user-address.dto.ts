// src/users/dto/user-address.dto.ts

import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';
import { UserDto } from './create-user.dto';

export class UserAddressDto {
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto;

    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto;
}
