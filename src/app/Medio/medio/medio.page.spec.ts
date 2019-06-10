import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioPage } from './medio.page';

describe('MedioPage', () => {
  let component: MedioPage;
  let fixture: ComponentFixture<MedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
