import { Test, TestingModule } from '@nestjs/testing';
import { DaietBeController } from './daiet-be.controller';

describe('DaietBeController', () => {
  let controller: DaietBeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaietBeController],
    }).compile();

    controller = module.get<DaietBeController>(DaietBeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
