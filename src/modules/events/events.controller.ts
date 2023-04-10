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
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('events')
@ApiTags('Events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    schema: {
      type: 'Object',
      properties: {
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
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBody({
    schema: {
      type: 'Object',
      properties: {
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
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
