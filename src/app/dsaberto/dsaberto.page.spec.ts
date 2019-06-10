import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSAbertoPage } from './dsaberto.page';

describe('DSAbertoPage', () => {
  let component: DSAbertoPage;
  let fixture: ComponentFixture<DSAbertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSAbertoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSAbertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
