import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { DrugsService } from './drugs.service';
import { CreateDrugDto, UpdateDrugDto } from './dto';

@Controller('drugs')
export class DrugsController {
  constructor(private drugsService: DrugsService) {}
  @Get('all')
  getBranches() {
    return this.drugsService.getDrugs();
  }

  @UseGuards(JwtGuard)
  @Post('create')
  createDrug(@GetUser('id') userId: number, @Body() dto: CreateDrugDto) {
    return this.drugsService.createDrug(userId, dto);
  }

  @UseGuards(JwtGuard)
  @Get('get/:id')
  getDrugById(@Param('id', ParseIntPipe) drugsId: number) {
    return this.drugsService.getDrugById(drugsId);
  }

  @UseGuards(JwtGuard)
  @Patch('update/:id')
  updateDrugyId(
    @Param('id', ParseIntPipe) drugsId: number,
    @Body() dto: UpdateDrugDto,
  ) {
    this.drugsService.updateDrugById(drugsId, dto);
  }

  @Delete('delete/:id')
  deleteDrugById(@Param('id', ParseIntPipe) drugsId: number) {
    this.drugsService.deleteDrugById(drugsId);
  }
}
