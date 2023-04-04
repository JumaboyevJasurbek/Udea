import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Description } from 'src/entities/description.entity';
import { Repository } from 'typeorm';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';

@Injectable()
export class DescriptionService {
  constructor(
    @InjectRepository(Description)
    private readonly repository: Repository<Description>,
  ) {}

  create(createDescriptionDto: CreateDescriptionDto) {
    return this.repository.save(createDescriptionDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  update(id: string, updateDescriptionDto: UpdateDescriptionDto) {
    return this.repository.update(id, updateDescriptionDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
