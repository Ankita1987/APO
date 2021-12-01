import { TestBed } from '@angular/core/testing';


import { tecService } from './tec.service';

describe('RolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: tecService = TestBed.get(tecService);
    expect(service).toBeTruthy();
  });
});
