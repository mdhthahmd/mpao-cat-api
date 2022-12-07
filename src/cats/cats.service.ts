import {
    Injectable, NotFoundException, UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateCatDto,
    EditCatDto,
} from './dto';

@Injectable()
export class CatService {
    constructor(private prisma: PrismaService) { }

    getCats() {
        return this.prisma.cat.findMany();
    }

    getCatById(
        catId: number,
    ) {
        const cat = this.prisma.cat.findFirst({
            where: {
                id: catId,
            },
        });
        if (!cat) throw new NotFoundException();
        return cat;
    }

    async createCat(
        dto: CreateCatDto,
    ) {
        const cat =
            await this.prisma.cat.create({
                data: {
                    ...dto,
                },
            });

        return cat;
    }

    async editCatById(
        catId: number,
        dto: EditCatDto,
    ) {

        if (dto.id != catId) throw new UnprocessableEntityException();

        const cat = await this.prisma.cat.findFirst({
            where: { id: catId }
        })

        if (!cat) throw new NotFoundException();

        const editedCat = await this.prisma.cat.update({
            where: { id: dto.id },
            data: { name: dto.name, age: dto.age, breed: dto.breed },
        });

        return editedCat;
    }

    async deleteCatById(
        catId: number,
    ) {

        const cat = await this.prisma.cat.findFirst({
            where: { id: catId }
        })

        if (!cat) throw new NotFoundException();

        await this.prisma.cat.delete({
            where: {
                id: catId,
            }
        })
    }
}