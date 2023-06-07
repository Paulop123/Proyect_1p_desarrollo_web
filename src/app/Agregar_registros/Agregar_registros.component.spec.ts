/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agregar_registrosComponent } from './Agregar_registros.component';

describe('Agregar_registrosComponent', () => {
  let component: Agregar_registrosComponent;
  let fixture: ComponentFixture<Agregar_registrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agregar_registrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agregar_registrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
