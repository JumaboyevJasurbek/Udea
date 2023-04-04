import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/entities/news.entity';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly repository: Repository<News>,
  ) {}

  create(createNewsDto: CreateNewsDto) {
    return this.repository.save(createNewsDto)
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id })
  }

  update(id: string, updateNewsDto: UpdateNewsDto) {
    return this.repository.update(id, updateNewsDto)
  }

  remove(id: string) {
    return this.repository.delete(id)
  }
}
