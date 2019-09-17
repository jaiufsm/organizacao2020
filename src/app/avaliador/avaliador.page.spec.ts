import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorPage } from './avaliador.page';

describe('AvaliadorPage', () => {
  let component: AvaliadorPage;
  let fixture: ComponentFixture<AvaliadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
