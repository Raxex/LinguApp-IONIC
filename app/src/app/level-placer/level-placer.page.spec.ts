import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelPlacerPage } from './level-placer.page';

describe('LevelPlacerPage', () => {
  let component: LevelPlacerPage;
  let fixture: ComponentFixture<LevelPlacerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelPlacerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelPlacerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
