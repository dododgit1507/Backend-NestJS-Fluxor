import { Test, TestingModule } from '@nestjs/testing';
import { SesionLimiteService } from './sesion_limite.service';

describe('SesionLimiteService', () => {
  let service: SesionLimiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesionLimiteService],
    }).compile();

    service = module.get<SesionLimiteService>(SesionLimiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
