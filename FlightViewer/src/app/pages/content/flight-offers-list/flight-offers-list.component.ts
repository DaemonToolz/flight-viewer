import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight, StationCity, PageData, FlightPublicStatus, Itinerary, FlightProduct } from 'src/app/models/FlightModel';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-offers-list',
  templateUrl: './flight-offers-list.component.html',
  styleUrls: ['./flight-offers-list.component.scss']
})
export class FlightOffersListComponent implements OnInit {

  public flights: FlightProduct[] = new Array<FlightProduct>();
  public stations: StationCity[] = new Array<StationCity>();
  public FlightPublicStatus = FlightPublicStatus;

  public departureStation: StationCity;
  public arrivalStation: StationCity;
  public dateFormCtrl = new FormControl(new Date());
  constructor(private _flightsService: FlightRetrieverService, private router: Router) {
    this.loadStations();

  }

  ngOnInit(): void {
  }

  public search() {
    this._flightsService.getOffersForDate(this.dateFormCtrl.value, this.departureStation.iataStationCode, this.arrivalStation.iataStationCode).subscribe(data => {
      this.flights = data;
    })
  }

  public loadStations() {
    this._flightsService.getStations().subscribe(data => {
      this.stations = data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    })
  }
}
