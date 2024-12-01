import { Module } from '@nestjs/common';
import { TypologicalController } from './typological.controller';

@Module({
  controllers: [TypologicalController]
})
export class TypologicalModule {}
