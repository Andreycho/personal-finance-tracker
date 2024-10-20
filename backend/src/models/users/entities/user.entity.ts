import { Transaction } from 'src/models/transactions/entities/transaction.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column({ default: null, type:"datetime"})
  created_at?:  Date;

  @Column({ default: null, type:"datetime"})
  updated_at?:  Date;

  @OneToMany(() => Transaction, transaction => transaction.user)
    transactions?: Transaction[];
  
}