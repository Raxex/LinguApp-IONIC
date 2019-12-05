import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafemPage } from './grafem.page';

describe('GrafemPage', () => {
  let component: GrafemPage;
  let fixture: ComponentFixture<GrafemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
