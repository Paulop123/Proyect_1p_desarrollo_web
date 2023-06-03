/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Citas_medicasComponent } from './Citas_medicas.component';

describe('Citas_medicasComponent', () => {
  let component: Citas_medicasComponent;
  let fixture: ComponentFixture<Citas_medicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Citas_medicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Citas_medicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
