import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoneticPage } from './fonetic.page';

describe('FoneticPage', () => {
  let component: FoneticPage;
  let fixture: ComponentFixture<FoneticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoneticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoneticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
