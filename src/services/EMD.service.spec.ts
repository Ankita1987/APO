import { TestBed } from '@angular/core/testing';


import { EMDService } from './EMD.service';

describe('RolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EMDService = TestBed.get(EMDService);
    expect(service).toBeTruthy();
  });
});
