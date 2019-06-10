import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroMarketingPage } from './terceiro-marketing.page';

describe('TerceiroMarketingPage', () => {
  let component: TerceiroMarketingPage;
  let fixture: ComponentFixture<TerceiroMarketingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroMarketingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroMarketingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
