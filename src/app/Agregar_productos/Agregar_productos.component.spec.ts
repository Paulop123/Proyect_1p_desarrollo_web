/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agregar_productosComponent } from './Agregar_productos.component';

describe('Agregar_productosComponent', () => {
  let component: Agregar_productosComponent;
  let fixture: ComponentFixture<Agregar_productosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agregar_productosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agregar_productosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
