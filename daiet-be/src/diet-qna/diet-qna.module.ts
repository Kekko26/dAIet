import { Module } from '@nestjs/common';
import { DietQnaService } from './diet-qna.service';
import { DietQnaController } from './diet-qna.controller';

@Module({
  providers: [DietQnaService],
  controllers: [DietQnaController]
})
export class DietQnaModule {}
