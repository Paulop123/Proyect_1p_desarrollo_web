/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina_inicioComponent } from './Pagina_inicio.component';

describe('Pagina_inicioComponent', () => {
  let component: Pagina_inicioComponent;
  let fixture: ComponentFixture<Pagina_inicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina_inicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina_inicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
