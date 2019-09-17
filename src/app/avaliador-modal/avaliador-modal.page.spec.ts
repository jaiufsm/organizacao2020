import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorModalPage } from './avaliador-modal.page';

describe('AvaliadorModalPage', () => {
  let component: AvaliadorModalPage;
  let fixture: ComponentFixture<AvaliadorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliadorModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliadorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
