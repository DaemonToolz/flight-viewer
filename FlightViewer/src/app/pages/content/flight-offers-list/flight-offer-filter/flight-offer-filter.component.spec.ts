import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOfferFilterComponent } from './flight-offer-filter.component';

describe('FlightOfferFilterComponent', () => {
  let component: FlightOfferFilterComponent;
  let fixture: ComponentFixture<FlightOfferFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightOfferFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightOfferFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
