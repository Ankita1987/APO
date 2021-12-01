import { TestBed } from '@angular/core/testing';

import { ATNoteServiceService } from './atnote-service.service';

describe('ATNoteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ATNoteServiceService = TestBed.get(ATNoteServiceService);
    expect(service).toBeTruthy();
  });
});
