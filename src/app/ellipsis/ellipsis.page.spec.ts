import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisPage } from './ellipsis.page';

describe('EllipsisPage', () => {
  let component: EllipsisPage;
  let fixture: ComponentFixture<EllipsisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EllipsisPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
