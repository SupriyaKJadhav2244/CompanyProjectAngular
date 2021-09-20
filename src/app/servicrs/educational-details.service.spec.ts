import { TestBed } from '@angular/core/testing';

import { EducationalDetailsService } from './educational-details.service';

describe('EducationalDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationalDetailsService = TestBed.get(EducationalDetailsService);
    expect(service).toBeTruthy();
  });
});
