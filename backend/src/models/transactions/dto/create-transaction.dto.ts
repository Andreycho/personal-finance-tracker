import { IsDateString, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsNotEmpty({ message: "Amount field cannot be empty" })  
    amount: number;

    @IsNotEmpty({ message: "Transaction type field cannot be empty" })
    @IsEnum(['income', 'expense'], { message: "Transaction type must be either income or expense" })
    transaction_type: string;

    @IsNotEmpty({ message: "Category field cannot be empty" })
    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsNotEmpty({ message: "Date field cannot be empty" })
    @IsDateString()
    date: Date;
}
