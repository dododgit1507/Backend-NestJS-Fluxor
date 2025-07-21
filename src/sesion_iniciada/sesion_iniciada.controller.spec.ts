import { Test, TestingModule } from '@nestjs/testing';
import { SesionIniciadaController } from './sesion_iniciada.controller';
import { SesionIniciadaService } from './sesion_iniciada.service';

describe('SesionIniciadaController', () => {
  let controller: SesionIniciadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SesionIniciadaController],
      providers: [SesionIniciadaService],
    }).compile();

    controller = module.get<SesionIniciadaController>(SesionIniciadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
