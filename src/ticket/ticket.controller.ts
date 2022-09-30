import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateTicketDto } from './dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}
  @UseGuards(JwtGuard)
  @Post('create')
  createTicket(@GetUser('id') userId: number, @Body() dto: CreateTicketDto) {
    return this.ticketService.createTicket(userId, dto);
  }
}
