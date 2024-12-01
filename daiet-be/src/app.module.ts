import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LlmModule } from './llm/llm.module';
import { ConfigModule } from '@nestjs/config';
import { DietGeneratorModule } from './diet-generator/diet-generator.module';
import { TypologicalModule } from './typological/typological.module';

@Module({
  imports: [
    LlmModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DietGeneratorModule,
    TypologicalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
