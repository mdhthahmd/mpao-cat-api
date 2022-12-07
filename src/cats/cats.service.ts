import {
    Injectable,
  } from '@nestjs/common';
  import {
    CreateCatDto,
    EditCatDto,
  } from './dto';
  
  @Injectable()
  export class CatService {
    // constructor() {}
  
    getCats() {
        return `all cats` 
    }
  
    getCatById(
      catId: number,
    ) {
      // return this.prisma.bookmark.findFirst({})
        return `cat with id: ${catId}`;
    }
  
    createCat(
      dto: CreateCatDto,
    ) {
    //   const cat =
    //     await this.prisma.bookmark.create({ });
  
      return `create cat ${dto.name}, ${dto.age}, ${dto.breed}`;
    }
  
    editCatById(
      catId: number,
      dto: EditCatDto,
    ) {
      return `edit cat with id: ${catId}, fields: ${dto.id}, ${dto.name}, ${dto.age}, ${dto.breed}`;
    }
  
    deleteCatById(
      catId: number,
    ) {
        return `delete cat with id: ${catId}`;
    }
  }