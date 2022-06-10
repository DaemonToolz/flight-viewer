import { Component, Input, OnInit } from '@angular/core';
import { StationCity, StationCityRegion } from 'src/app/models/FlightModel';

@Component({
  selector: 'app-flight-offer-station-search',
  templateUrl: './flight-offer-station-search.component.html',
  styleUrls: ['./flight-offer-station-search.component.scss']
})
export class FlightOfferStationSearchComponent implements OnInit {
  @Input()  public stations: Array<StationCityRegion>;

  constructor() { 
    console.log(this.stations);
  }

  ngOnInit(): void {

  }



}
