import { Necessity } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  drug: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  quantity: number;

  @IsEnum(Necessity)
  public necessity: Necessity;
}
