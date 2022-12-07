import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class EditCatDto {
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    age: number;
  
    @IsString()
    @IsNotEmpty()
    breed: string;
  }
