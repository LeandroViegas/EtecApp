import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbertoPage } from './aberto.page';

describe('AbertoPage', () => {
  let component: AbertoPage;
  let fixture: ComponentFixture<AbertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbertoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
