import { IsString } from "class-validator"

export class CreateNewsDto {
    category_uz:string
    
    category_ru :string
    
    category_en:string
    
    title_uz:string
    
    title_ru:string
    
    title_en:string
    
    description_uz:string
    
    description_ru:string
    
    description_en:string
    
    img:string
    
    date:string
}
