import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { RequestRedirectType } from 'src/app/models/FlightDetailModel';
import { Flight, StationCity, PageData, FlightPublicStatus, Itinerary, FlightProduct, ConnectionDetail } from 'src/app/models/FlightModel';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-offers-list',
  templateUrl: './flight-offers-list.component.html',
  styleUrls: ['./flight-offers-list.component.scss']
})
export class FlightOffersListComponent implements OnInit {
  @ViewChild("drawer") drawer: MatDrawer;

  public selectedFlight : Itinerary;

  public FlightPublicStatus = FlightPublicStatus;

  public flights: Itinerary[] = new Array<Itinerary>();
  public stations: StationCity[] = new Array<StationCity>();

  public departureStation: StationCity;
  public arrivalStation: StationCity;
  public dateFormCtrl = new FormControl(new Date());

  constructor(private _flightsService: FlightRetrieverService, private router: Router) {
    this.loadStations();
  }

  ngOnInit(): void {
  }

  public DisplayDetail(selectedFlight: Itinerary){
    this.selectedFlight = selectedFlight;
    this.drawer.open()
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

  getFlightsHoursFromMinutes(minutes: string): Date {
    return new Date(0,0,1,0,+minutes,0,0);
  }

  getFlightDaysFromMinutes(minutes: string): number {
    return new Date(0,0,1,0,+minutes,0,0).getDate()-1;
  }

  
  getFlightsHoursFromMinuteNum(minutes: number): Date {
    return new Date(0,0,1,0,minutes,0,0);
  }

  getFlightDaysFromMinutesNum(minutes: number): number {
    return new Date(0,0,1,0,minutes,0,0).getDate()-1;
  }

  getConnectionLabel(it: ConnectionDetail): string {
   if(it.segments.length == 1){
    return "offer.flight.direct"
   }

   return "offer.flight.connection"
  }



}
