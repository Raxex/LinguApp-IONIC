import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetPage } from './let.page';

describe('LetPage', () => {
  let component: LetPage;
  let fixture: ComponentFixture<LetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
