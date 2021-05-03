import { TestBed } from '@angular/core/testing';

import { AdminRepositoryService } from './admin-repository.service';

describe('AdminRepositoryService', () => {
  let service: AdminRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
