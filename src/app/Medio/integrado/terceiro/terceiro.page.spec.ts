import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroPage } from './terceiro.page';

describe('TerceiroPage', () => {
  let component: TerceiroPage;
  let fixture: ComponentFixture<TerceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
