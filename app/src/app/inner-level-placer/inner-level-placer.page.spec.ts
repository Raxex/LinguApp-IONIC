import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerLevelPlacerPage } from './inner-level-placer.page';

describe('InnerLevelPlacerPage', () => {
  let component: InnerLevelPlacerPage;
  let fixture: ComponentFixture<InnerLevelPlacerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerLevelPlacerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerLevelPlacerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
