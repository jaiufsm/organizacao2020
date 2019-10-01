import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorAusenteModalPage } from './avaliador-ausente-modal.page';

describe('AvaliadorModalPage', () => {
  let component: AvaliadorAusenteModalPage;
  let fixture: ComponentFixture<AvaliadorAusenteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliadorAusenteModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliadorAusenteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
