import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Controller('grupo')
export class GrupoController {

    constructor(private readonly prisma: PrismaService){}

    @Get()
    buscarTodos() {
        return this.prisma.grupo.findMany()
    }
}
