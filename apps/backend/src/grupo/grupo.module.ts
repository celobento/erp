import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { GrupoController } from './grupo.controller';

@Module({
    imports: [DbModule],
    controllers: [GrupoController]
})
export class GrupoModule {}
