import { Get, Controller, Post, Delete, Patch, Param, ParseIntPipe, Body } from '@nestjs/common';
import { CatService } from './cats.service';
import { CreateCatDto, EditCatDto } from './dto';

@Controller('cats')
export class CatsController {

    constructor(private catService: CatService) {}

    @Get()
    findAll(): string {
        return this.catService.getCats();
    }

    @Post()
    create(@Body() dto: CreateCatDto): string {
        return this.catService.createCat(dto)
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) catId: number): string {
        return this.catService.getCatById(catId);
    }


    @Patch(':id')
    editById(@Body() dto: EditCatDto, @Param('id', ParseIntPipe) catId: number): string {
        return this.catService.editCatById(catId,dto);
    }

    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) catId: number): string {
        return this.catService.deleteCatById(catId);
    }


}
