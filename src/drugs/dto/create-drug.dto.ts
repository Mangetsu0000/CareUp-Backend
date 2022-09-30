import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDrugDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  quantitiy: number;

  @IsString()
  @IsNotEmpty()
  category: string;
}
