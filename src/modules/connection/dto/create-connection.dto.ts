import { IsString, IsNotEmpty } from 'class-validator';

export class CreateConnectionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  number: string;
}
