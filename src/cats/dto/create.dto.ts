import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    @IsOptional()
    age: number;
  
    @IsString()
    @IsNotEmpty()
    breed: string;
  }
