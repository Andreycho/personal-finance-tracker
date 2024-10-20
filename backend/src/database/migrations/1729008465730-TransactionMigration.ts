import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TransactionMigration1729008465730 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the transactions table
        await queryRunner.createTable(
            new Table({
                name: 'transactions',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        isNullable: false, // user_id cannot be null
                    },
                    {
                        name: 'amount',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                        isNullable: false, // amount cannot be null
                    },
                    {
                        name: 'transaction_type',
                        type: 'enum',
                        enum: ['income', 'expense'],
                        isNullable: false, // transaction_type cannot be null
                    },
                    {
                        name: 'category',
                        type: 'varchar',
                        length: '255',
                        isNullable: false, // category cannot be null
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true, // description is optional
                    },
                    {
                        name: 'date',
                        type: 'datetime',
                        isNullable: false, // date cannot be null
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP',
                    },
                ],
            })
        );

        // Create the foreign key for user_id
        await queryRunner.createForeignKey(
            'transactions',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE', // If a user is deleted, their transactions will also be deleted
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the current table and find the foreign key
        const table = await queryRunner.getTable('transactions');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1);
        
        // Drop the foreign key
        await queryRunner.dropForeignKey('transactions', foreignKey);
        
        // Drop the transactions table
        await queryRunner.dropTable('transactions');
    }
}
