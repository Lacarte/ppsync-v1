/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FullscreenService } from './fullscreen.service';

describe('Service: Fullscreen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [FullscreenService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should ...', inject([FullscreenService], (service: FullscreenService) => {
    expect(service).toBeTruthy();
  }));
});
