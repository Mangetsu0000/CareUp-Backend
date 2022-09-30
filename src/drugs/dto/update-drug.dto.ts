import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDrugDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  price?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  quantitiy?: number;

  @IsString()
  @IsOptional()
  category?: string;
}
