import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticionComponent } from './particion.component';

describe('ParticionComponent', () => {
  let component: ParticionComponent;
  let fixture: ComponentFixture<ParticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
