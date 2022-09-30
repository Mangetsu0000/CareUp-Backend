import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateDrugDto, UpdateDrugDto } from './dto';

@Injectable()
export class DrugsService {
  constructor(private prisma: PrismaService) {}
  getDrugs() {
    return this.prisma.drug.findMany();
  }

  getDrugById(drugsId: number) {
    return this.prisma.drug.findFirst({
      where: {
        id: drugsId,
      },
    });
  }

  async createDrug(userId: number, dto: CreateDrugDto) {
    const drug = await this.prisma.drug.create({
      data: {
        userId,
        name: dto.name,
        price: dto.price,
        quantity: dto.quantitiy,
        category: dto.category,
      },
    });
    return drug;
  }

  async updateDrugById(drugsId: number, dto: UpdateDrugDto) {
    const drug = await this.prisma.drug.findUnique({
      where: {
        id: drugsId,
      },
    });

    // check if drug exists
    if (!drug) throw new ForbiddenException('drug does not exist');

    return this.prisma.drug.update({
      where: {
        id: drugsId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteDrugById(drugId: number) {
    const drug = await this.prisma.drug.findUnique({
      where: {
        id: drugId,
      },
    });

    // check if drugs exists
    if (!drug) throw new ForbiddenException('Access to resources denied');

    return this.prisma.drug.delete({
      where: {
        id: drugId,
      },
    });
  }
}
