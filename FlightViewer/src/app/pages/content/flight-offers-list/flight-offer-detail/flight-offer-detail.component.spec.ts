import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOfferDetailComponent } from './flight-offer-detail.component';

describe('FlightOfferDetailComponent', () => {
  let component: FlightOfferDetailComponent;
  let fixture: ComponentFixture<FlightOfferDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightOfferDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
