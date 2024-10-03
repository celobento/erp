import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { GrupoController } from './grupo/grupo.controller';
import { GrupoModule } from './grupo/grupo.module';

@Module({
  imports: [DbModule, GrupoModule],
  controllers: [AppController, GrupoController],
  providers: [AppService],
})
export class AppModule {}
