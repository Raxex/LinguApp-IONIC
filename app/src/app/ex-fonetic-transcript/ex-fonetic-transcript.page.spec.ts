import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFoneticTranscriptPage } from './ex-fonetic-transcript.page';

describe('ExFoneticTranscriptPage', () => {
  let component: ExFoneticTranscriptPage;
  let fixture: ComponentFixture<ExFoneticTranscriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExFoneticTranscriptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFoneticTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
