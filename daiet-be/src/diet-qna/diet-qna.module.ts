import { Module } from '@nestjs/common';
import { DietQnaService } from './diet-qna.service';
import { DietQnaController } from './diet-qna.controller';
import { LlmModule } from 'src/llm/llm.module';

@Module({
  providers: [DietQnaService],
  controllers: [DietQnaController],
  imports: [LlmModule]
})
export class DietQnaModule {}
