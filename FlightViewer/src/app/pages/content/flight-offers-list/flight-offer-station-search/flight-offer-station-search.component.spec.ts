import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOfferStationSearchComponent } from './flight-offer-station-search.component';

describe('FlightOfferStationSearchComponent', () => {
  let component: FlightOfferStationSearchComponent;
  let fixture: ComponentFixture<FlightOfferStationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightOfferStationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightOfferStationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
