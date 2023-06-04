/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Quienes_somosComponent } from './Quienes_somos.component';

describe('Quienes_somosComponent', () => {
  let component: Quienes_somosComponent;
  let fixture: ComponentFixture<Quienes_somosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quienes_somosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quienes_somosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
