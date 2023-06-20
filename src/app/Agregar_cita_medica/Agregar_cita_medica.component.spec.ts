/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agregar_cita_medicaComponent } from './Agregar_cita_medica.component';

describe('Agregar_cita_medicaComponent', () => {
  let component: Agregar_cita_medicaComponent;
  let fixture: ComponentFixture<Agregar_cita_medicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agregar_cita_medicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agregar_cita_medicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
