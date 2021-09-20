import { TestBed } from '@angular/core/testing';

import { DisplayCompanyProfileService } from './display-company-profile.service';

describe('DisplayCompanyProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayCompanyProfileService = TestBed.get(DisplayCompanyProfileService);
    expect(service).toBeTruthy();
  });
});
