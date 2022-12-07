import { Get, Controller, Post, Delete, Patch, Param, ParseIntPipe, Body, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { CatService } from './cats.service';
import { CreateCatDto, EditCatDto } from './dto';

@Controller('cats')
export class CatsController {

    constructor(private catService: CatService) {}

    @Get()
    findAll() {
        return this.catService.getCats();
    }

    @Post() 
    create(@Body() dto: CreateCatDto) {
        this.catService.createCat(dto)
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) catId: number) {
        return this.catService.getCatById(catId);
    }


    @Patch(':id')
    editById(@Body() dto: EditCatDto, @Param('id', ParseIntPipe) catId: number) {
        return this.catService.editCatById(catId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) catId: number) {
        return this.catService.deleteCatById(catId);
    }


}
