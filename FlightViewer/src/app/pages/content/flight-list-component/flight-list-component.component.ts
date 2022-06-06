import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/FlightModel';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-list-component',
  templateUrl: './flight-list-component.component.html',
  styleUrls: ['./flight-list-component.component.scss']
})
export class FlightListComponentComponent implements OnInit {
  public flights:Flight[] = new Array<Flight>();

  constructor(private _flightsService: FlightRetrieverService) { 
    _flightsService.getFlights().subscribe(data => {
      console.log(data);
      this.flights = data;
    });
  }

  ngOnInit(): void {
  }

}
