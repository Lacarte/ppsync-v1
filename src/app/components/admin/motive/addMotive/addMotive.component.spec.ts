/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddMotiveComponent } from './addMotive.component';

describe('AddMotiveComponent', () => {
  let component: AddMotiveComponent;
  let fixture: ComponentFixture<AddMotiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [AddMotiveComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
