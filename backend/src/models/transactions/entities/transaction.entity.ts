import e from 'express';
import { UserEntity } from 'src/models/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    transaction_type: string;

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
