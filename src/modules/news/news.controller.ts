import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('news')
@ApiTags('News')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: 'Object',
      properties: {
        category_uz: {
          type: 'string',
          default: 'qwerty',
        },

        category_ru: {
          type: 'string',
          default: 'qwerty',
        },

        category_en: {
          type: 'string',
          default: 'qwerty',
        },

        title_uz: {
          type: 'string',
          default: 'qwerty',
        },

        title_ru: {
          type: 'string',
          default: 'qwerty',
        },

        title_en: {
          type: 'string',
          default: 'qwerty',
        },

        description_uz: {
          type: 'string',
          default: 'qwerty',
        },

        description_ru: {
          type: 'string',
          default: 'qwerty',
        },

        description_en: {
          type: 'string',
          default: 'qwerty',
        },

        img: {
          type: 'string',
          default: 'qwerty',
        },

        date: {
          type: 'string',
          default: 'qwerty',
        },
      },
    },
  })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBody({
    schema: {
      type: 'Object',
      properties: {
        category_uz: {
          type: 'string',
          default: 'qwerty',
        },

        category_ru: {
          type: 'string',
          default: 'qwerty',
        },

        category_en: {
          type: 'string',
          default: 'qwerty',
        },

        title_uz: {
          type: 'string',
          default: 'qwerty',
        },

        title_ru: {
          type: 'string',
          default: 'qwerty',
        },

        title_en: {
          type: 'string',
          default: 'qwerty',
        },

        description_uz: {
          type: 'string',
          default: 'qwerty',
        },

        description_ru: {
          type: 'string',
          default: 'qwerty',
        },

        description_en: {
          type: 'string',
          default: 'qwerty',
        },

        img: {
          type: 'string',
          default: 'qwerty',
        },

        date: {
          type: 'string',
          default: 'qwerty',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
