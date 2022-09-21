import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Particion2Component } from './particion2.component';

describe('Particion2Component', () => {
  let component: Particion2Component;
  let fixture: ComponentFixture<Particion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Particion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Particion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
