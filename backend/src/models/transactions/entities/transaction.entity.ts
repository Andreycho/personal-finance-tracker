import e from 'express';
import { UserEntity } from 'src/models/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TransactionType } from '../enums/transaction-type.enum';

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column({ type: 'enum', enum: TransactionType })
    transaction_type: TransactionType;

    @Column()
    category: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at?:  Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at?:  Date;

    @ManyToOne(() => UserEntity, (user) => user.transactions, { eager: true })
    user: UserEntity;
}
