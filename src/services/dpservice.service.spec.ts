import { TestBed } from '@angular/core/testing';

import { DPServiceService } from './dpservice.service';

describe('DPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DPServiceService = TestBed.get(DPServiceService);
    expect(service).toBeTruthy();
  });
});
