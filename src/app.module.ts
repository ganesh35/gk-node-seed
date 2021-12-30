import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppInfoModule } from './app-info/app-info.module';
import { AppHealthModule } from './app-health/app-health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AppInfoModule, 
    AppHealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
