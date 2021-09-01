import { TestBed } from '@angular/core/testing';

import { Helpers.Service.TsService } from './helpers.service.ts.service';

describe('Helpers.Service.TsService', () => {
  let service: Helpers.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Helpers.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
