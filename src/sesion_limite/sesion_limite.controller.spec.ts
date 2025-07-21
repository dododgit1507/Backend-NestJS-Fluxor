import { Test, TestingModule } from '@nestjs/testing';
import { SesionLimiteController } from './sesion_limite.controller';
import { SesionLimiteService } from './sesion_limite.service';

describe('SesionLimiteController', () => {
  let controller: SesionLimiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SesionLimiteController],
      providers: [SesionLimiteService],
    }).compile();

    controller = module.get<SesionLimiteController>(SesionLimiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
