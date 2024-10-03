import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { GrupoController } from './grupo/grupo.controller';
import { GrupoModule } from './grupo/grupo.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }), DbModule, GrupoModule, AuthModule],
  controllers: [AppController, GrupoController],
  providers: [AppService]
})
export class AppModule {}
