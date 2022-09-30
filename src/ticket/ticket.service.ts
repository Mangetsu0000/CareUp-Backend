import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketDto } from './dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}
  async createTicket(userId: number, dto: CreateTicketDto) {
    const ticket = await this.prisma.ticket.create({
      data: {
        userId,
        drugId: dto.drug,
        quantity: dto.quantity,
        necessity: dto.necessity,
      },
    });
    return ticket;
  }
}
