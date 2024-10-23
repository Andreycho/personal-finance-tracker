import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, registerDecorator, ValidationOptions } from "class-validator";
import { ExpenseCategory, IncomeCategory, TransactionType } from "../enums/transaction-type.enum";

@ValidatorConstraint({ name: 'IsCategoryForType', async: false })
class IsCategoryForTypeConstraint implements ValidatorConstraintInterface {
    validate(category: any, args: ValidationArguments) {
        const object = args.object as any;
        if (object.transaction_type === TransactionType.INCOME) {
            return Object.values(IncomeCategory).includes(category);
        } else if (object.transaction_type === TransactionType.EXPENSE) {
            return Object.values(ExpenseCategory).includes(category);
        }
        return false;
    }

    defaultMessage(args: ValidationArguments) {
        const object = args.object as any;
        if (object.transaction_type === TransactionType.INCOME) {
            return `Category must be one of the following for income: ${Object.values(IncomeCategory).join(', ')}`;
        } else if (object.transaction_type === TransactionType.EXPENSE) {
            return `Category must be one of the following for expense: ${Object.values(ExpenseCategory).join(', ')}`;
        }
        return 'Invalid category';
    }
}

function IsCategoryForType(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCategoryForTypeConstraint,
        });
    };
}

export class CreateTransactionDto {
    @IsNotEmpty({ message: "Amount field cannot be empty" })  
    amount: number;

    @IsNotEmpty({ message: "Transaction type field cannot be empty" })
    @IsEnum(TransactionType, { message: "Transaction type must be either income or expense" })
    transaction_type: 'income' | 'expense';

    @IsNotEmpty({ message: "Category field cannot be empty" })
    @IsString()
    @IsCategoryForType({ message: "Invalid category for the selected transaction type" })
    category: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty({ message: "Date field cannot be empty" })
    @IsDateString()
    date: string;
}
