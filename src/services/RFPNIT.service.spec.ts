import { TestBed } from '@angular/core/testing';


import { RFPNITService } from './RFPNIT.service';

describe('RolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RFPNITService = TestBed.get(RFPNITService);
    expect(service).toBeTruthy();
  });
});
