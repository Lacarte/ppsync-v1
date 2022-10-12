/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddRequestStatusComponent } from './addRequest-status.component';

describe('AddRequestStatusComponent', () => {
  let component: AddRequestStatusComponent;
  let fixture: ComponentFixture<AddRequestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [AddRequestStatusComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
