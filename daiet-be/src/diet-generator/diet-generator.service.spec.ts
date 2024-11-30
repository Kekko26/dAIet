import { Test, TestingModule } from '@nestjs/testing';
import { DietGeneratorService } from './diet-generator.service';

describe('DietGeneratorService', () => {
  let service: DietGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietGeneratorService],
    }).compile();

    service = module.get<DietGeneratorService>(DietGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
