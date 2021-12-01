import { TestBed } from '@angular/core/testing';

import { MasterService } from './Master.service';

describe('RolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service).toBeTruthy();
  });
});
