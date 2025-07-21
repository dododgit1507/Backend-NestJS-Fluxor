import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionFlujoService } from './asignacion_flujo.service';

describe('AsignacionFlujoService', () => {
  let service: AsignacionFlujoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionFlujoService],
    }).compile();

    service = module.get<AsignacionFlujoService>(AsignacionFlujoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
