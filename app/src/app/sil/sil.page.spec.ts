import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilPage } from './sil.page';

describe('SilPage', () => {
  let component: SilPage;
  let fixture: ComponentFixture<SilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
