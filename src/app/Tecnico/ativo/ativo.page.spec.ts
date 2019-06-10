import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoPage } from './ativo.page';

describe('AtivoPage', () => {
  let component: AtivoPage;
  let fixture: ComponentFixture<AtivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
