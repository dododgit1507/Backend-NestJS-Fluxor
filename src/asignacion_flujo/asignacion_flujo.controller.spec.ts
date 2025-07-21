import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionFlujoController } from './asignacion_flujo.controller';
import { AsignacionFlujoService } from './asignacion_flujo.service';

describe('AsignacionFlujoController', () => {
  let controller: AsignacionFlujoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignacionFlujoController],
      providers: [AsignacionFlujoService],
    }).compile();

    controller = module.get<AsignacionFlujoController>(AsignacionFlujoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
