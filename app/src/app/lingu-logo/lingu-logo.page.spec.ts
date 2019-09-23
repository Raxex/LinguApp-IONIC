import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguLogoPage } from './lingu-logo.page';

describe('LinguLogoPage', () => {
  let component: LinguLogoPage;
  let fixture: ComponentFixture<LinguLogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguLogoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguLogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
