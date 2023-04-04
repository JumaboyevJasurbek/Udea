import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'src/entities/connection.entity';
import { Repository } from 'typeorm';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';

@Injectable()
export class ConnectionService {
  constructor(
    @InjectRepository(Connection)
    private readonly conRepository: Repository<Connection>,
  ) {}
  create(createConnectionDto: CreateConnectionDto): Promise<Connection> {
    return this.conRepository.save(createConnectionDto);
  }

  findAll() {
    return this.conRepository.find();
  }

  findOne(id: string) {
    return this.conRepository.findOneBy({id});
  }

  update(id: string, updateConnectionDto: UpdateConnectionDto) {
    return this.conRepository.update(id, updateConnectionDto);
  }

  remove(id: string) {
    return this.conRepository.delete(id);
  }
}
