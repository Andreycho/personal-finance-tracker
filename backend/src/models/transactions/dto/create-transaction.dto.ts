export class CreateTransactionDto {
    amount: number;
    transaction_type: string;
    category: string;
    description: string;
    date: Date;
}
