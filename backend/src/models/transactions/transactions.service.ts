import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UserEntity } from '../users/entities/user.entity';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(data: CreateTransactionDto, user: any): Promise<Transaction> {
    if (!user) {
      throw new BadRequestException('User must be logged in to create a transaction.');
    }

    const transaction = new Transaction();
    transaction.amount = data.amount;
    transaction.transaction_type = data.transaction_type;
    transaction.category = data.category;
    transaction.description = data.description || null;
    transaction.date = new Date(data.date);
    transaction.user = user.payload.user;

    return await this.transactionsRepository.save(transaction);
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
