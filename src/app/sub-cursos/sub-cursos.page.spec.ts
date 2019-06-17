import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCursosPage } from './sub-cursos.page';

describe('SubCursosPage', () => {
  let component: SubCursosPage;
  let fixture: ComponentFixture<SubCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCursosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
