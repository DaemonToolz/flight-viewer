import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOffersListComponent } from './flight-offers-list.component';

describe('FlightOffersListComponent', () => {
  let component: FlightOffersListComponent;
  let fixture: ComponentFixture<FlightOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightOffersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
