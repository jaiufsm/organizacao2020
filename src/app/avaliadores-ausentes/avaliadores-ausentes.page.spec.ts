import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadoresAusentesPage } from './avaliadores-ausentes.page';

describe('AvaliadoresAusentesPage', () => {
  let component: AvaliadoresAusentesPage;
  let fixture: ComponentFixture<AvaliadoresAusentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliadoresAusentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliadoresAusentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
