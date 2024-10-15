import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(data: object)  {
    return await this.transactionsRepository.save(data).then(res => res);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find()
  }

  findOne(id: number): Promise<Transaction> {
    return this.transactionsRepository.findOne({ where: { id } });
  }

  async update(id:number, data: object): Promise<Transaction | UpdateResult | undefined> {
    const book = await this.findOne(id).then(res =>res);
    if(book) return await this.transactionsRepository.update(id, data).then(res => res);
    return ;
  }

  async remove(id: number) {
    return await this.transactionsRepository.delete(id);
  }
}
