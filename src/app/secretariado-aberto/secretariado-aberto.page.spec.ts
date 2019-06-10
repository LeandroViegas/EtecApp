import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariadoAbertoPage } from './secretariado-aberto.page';

describe('SecretariadoAbertoPage', () => {
  let component: SecretariadoAbertoPage;
  let fixture: ComponentFixture<SecretariadoAbertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariadoAbertoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariadoAbertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
