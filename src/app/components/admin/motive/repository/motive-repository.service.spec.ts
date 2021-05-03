import { TestBed } from '@angular/core/testing';

import { MotiveRepositoryService } from './motive-repository.service';

describe('MotiveRepositoryService', () => {
  let service: MotiveRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotiveRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
