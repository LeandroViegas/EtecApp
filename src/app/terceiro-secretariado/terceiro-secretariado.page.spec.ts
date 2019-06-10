import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroSecretariadoPage } from './terceiro-secretariado.page';

describe('TerceiroSecretariadoPage', () => {
  let component: TerceiroSecretariadoPage;
  let fixture: ComponentFixture<TerceiroSecretariadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroSecretariadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroSecretariadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
