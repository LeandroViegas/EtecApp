import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAbertoPage } from './marketing-aberto.page';

describe('MarketingAbertoPage', () => {
  let component: MarketingAbertoPage;
  let fixture: ComponentFixture<MarketingAbertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingAbertoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingAbertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
