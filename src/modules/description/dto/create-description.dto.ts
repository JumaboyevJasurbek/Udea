import { IsString } from "class-validator"

export class CreateDescriptionDto {
    @IsString()
    category_uz:string

    @IsString()
    category_ru :string

    @IsString()
    category_en:string

    @IsString()
    title_uz:string

    @IsString()
    title_ru:string

    @IsString()
    title_en:string

    @IsString()
    description_uz:string

    @IsString()
    description_en:string

    @IsString()
    description_ru:string

    @IsString()
    month:string

    @IsString()
    day:string

    @IsString()
    date:string

    @IsString()
    img:string
}
