import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsbarPage } from './tabsbar.page';

describe('TabsbarPage', () => {
  let component: TabsbarPage;
  let fixture: ComponentFixture<TabsbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
