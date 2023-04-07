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
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { DescriptionService } from './description.service';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';

@Controller('description')
@ApiTags("Description")
export class DescriptionController {
  constructor(private readonly descriptionService: DescriptionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        category_uz: {
          type: 'string',
          default: 'dsfsgf',
        },
        category_ru: {
          type: 'string',
          default: 'we',
        },
        category_en: {
          type: 'string',
          default: 'we',
        },
        title_uz: {
          type: 'string',
          format: 'binary',
          default: 'dsfsgf',
        },
        title_ru: {
          type: 'string',
          default: 'we',
        },
        title_en: {
          type: 'string',
          default: 'we',
        },
        description_uz: {
          type: 'string',
          format: 'binary',
          default: 'dsfsgf',
        },
        description_ru: {
          type: 'string',
          default: 'we',
        },
        description_en: {
          type: 'string',
          default: 'we',
        },
        month: {
          type: 'string',
          format: 'binary',
          default: 'dsfsgf',
        },
        day: {
          type: 'string',
          default: 'we',
        },
        date: {
          type: 'string',
          default: 'we',
        },
        
        img: {
          type: 'string',
          default: 'we',
        },
      },
    },
  })
  create(@Body() createDescriptionDto: CreateDescriptionDto) {
    return this.descriptionService.create(createDescriptionDto);
  }

  @Get()
  findAll() {
    return this.descriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDescriptionDto: UpdateDescriptionDto,
  ) {
    return this.descriptionService.update(id, updateDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionService.remove(id);
  }
}
