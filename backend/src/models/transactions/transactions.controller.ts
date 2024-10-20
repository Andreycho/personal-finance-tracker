import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpStatus, Req } from '@nestjs/common';
import { Response } from 'express';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto, @Req() req) {
    const user = req.user;
    return this.transactionsService.create(createTransactionDto, user);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    let transaction = await this.transactionsService.findOne(+id)
    if(transaction) return res.status(HttpStatus.OK).json(transaction)
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "This resource  no longer exist or has been removed"})
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto, @Res() res: Response) {
    const response = await this.transactionsService.update(+id, updateTransactionDto);
    if(response) return res.status(HttpStatus.OK).json({"message" : "Transaction updated successfully"})
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "This resource  no longer exist or has been removed"})
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.transactionsService.remove(+id);
    return res.status(HttpStatus.OK).json({"message" : "Transaction deleted successfully"});
  }
}
