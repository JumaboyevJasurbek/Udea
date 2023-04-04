import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/entities/event.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  create(createEventDto: CreateEventDto) {
    return this.repository.save(createEventDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.repository.update(id, updateEventDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
