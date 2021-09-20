import { TestBed } from '@angular/core/testing';

import { DisplayStudentsProfileService } from './display-students-profile.service';

describe('DisplayStudentsProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayStudentsProfileService = TestBed.get(DisplayStudentsProfileService);
    expect(service).toBeTruthy();
  });
});
