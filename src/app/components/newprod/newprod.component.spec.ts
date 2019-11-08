/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewprodComponent } from './newprod.component';

describe('NewprodComponent', () => {
  let component: NewprodComponent;
  let fixture: ComponentFixture<NewprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
