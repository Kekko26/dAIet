import { Module } from '@nestjs/common';
import { DietGeneratorService } from './diet-generator.service';
import { DietGeneratorController } from './diet-generator.controller';
import { LlmService } from 'src/llm/llm.service';
import { LlmModule } from 'src/llm/llm.module';

@Module({
  imports: [LlmModule],
  providers: [DietGeneratorService],
  controllers: [DietGeneratorController]
})
export class DietGeneratorModule {}
