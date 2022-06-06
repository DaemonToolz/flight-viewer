import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListComponentComponent } from './flight-list-component.component';

describe('FlightListComponentComponent', () => {
  let component: FlightListComponentComponent;
  let fixture: ComponentFixture<FlightListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
