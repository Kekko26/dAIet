import { Module } from '@nestjs/common';
import { DietGeneratorService } from './diet-generator.service';

@Module({
  providers: [DietGeneratorService]
})
export class DietGeneratorModule {}
