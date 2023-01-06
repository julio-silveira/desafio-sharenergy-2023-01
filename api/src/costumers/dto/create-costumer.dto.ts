import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumberString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Address } from './address.dto';

export class CreateCostumerDto {
  @Length(3, 255)
  name: string;

  @Length(3, 155)
  @IsEmail()
  email: string;

  @Length(11, 11)
  @IsNumberString()
  phone: string;

  @ValidateNested()
  @Type(() => Address)
  address: Address;

  @Length(11, 11)
  @IsNumberString()
  cpf: string;
}
