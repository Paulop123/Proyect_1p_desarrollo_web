/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Editar_registroComponent } from './Editar_registro.component';

describe('Editar_registroComponent', () => {
  let component: Editar_registroComponent;
  let fixture: ComponentFixture<Editar_registroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editar_registroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editar_registroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
