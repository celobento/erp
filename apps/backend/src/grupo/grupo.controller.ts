import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/db/prisma.service';

@Controller('grupo')
export class GrupoController {

    constructor(private readonly prisma: PrismaService){}

    @Get()
    @UseGuards(AuthGuard())
    buscarTodos() {
        return this.prisma.grupo.findMany()
    }
}
