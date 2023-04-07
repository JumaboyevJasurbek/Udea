import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  category_uz: string;

  category_ru: string;

  category_en: string;

  title_uz: string;

  title_ru: string;

  title_en: string;

  description_uz: string;

  description_ru: string;

  description_en: string;

  img: string;

  date: string;
}
