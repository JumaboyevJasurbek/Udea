import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateConnectionDto } from './create-connection.dto';

export class UpdateConnectionDto extends PartialType(CreateConnectionDto) {
    @IsString()
    name: string;
  
    @IsString()
    number: string;
}
