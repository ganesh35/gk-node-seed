import { Test, TestingModule } from '@nestjs/testing';
import { AppHealthController } from './app-health.controller';

describe('AppHealthController', () => {
  let controller: AppHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppHealthController],
    }).compile();

    controller = module.get<AppHealthController>(AppHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
