import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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

    @Column({ default: null, type:"datetime" })
    created_at?:  Date;

    @Column({ default: null, type:"datetime" })
    updated_at?:  Date;
}
