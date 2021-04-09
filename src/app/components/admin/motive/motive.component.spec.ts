/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotiveComponent } from './motive.component';

describe('MotiveComponent', () => {
  let component: MotiveComponent;
  let fixture: ComponentFixture<MotiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
