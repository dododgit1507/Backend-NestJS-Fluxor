import { Test, TestingModule } from '@nestjs/testing';
import { SesionIniciadaService } from './sesion_iniciada.service';

describe('SesionIniciadaService', () => {
  let service: SesionIniciadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesionIniciadaService],
    }).compile();

    service = module.get<SesionIniciadaService>(SesionIniciadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
