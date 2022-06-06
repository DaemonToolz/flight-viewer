import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Flight, FlightPublicStatus, PageData } from 'src/app/models/FlightModel';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-list-component',
  templateUrl: './flight-list-component.component.html',
  styleUrls: ['./flight-list-component.component.scss'],
})
export class FlightListComponentComponent implements OnInit {
  public flights: Flight[] = new Array<Flight>();
  public pageInfo: PageData = new PageData();
  public FlightPublicStatus = FlightPublicStatus;
  constructor(private _flightsService: FlightRetrieverService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  public search(){
    this._flightsService.getFlightExtract(this.range.get("start").value, this.range.get("end").value).subscribe(data => {
      data.operationalFlights.forEach(item => {
        item.flightLegs = item.flightLegs.sort((lega, legb) => new Date(lega.arrivalInformation.times.scheduled).getTime() - new Date(legb.arrivalInformation.times.scheduled).getTime())
      });
      this.pageInfo = data.page;
      this.flights = data.operationalFlights;  
    });
  }

  public getServerData(event?:PageEvent){
    this._flightsService.getFlightExtract(this.range.get("start").value, this.range.get("end").value, event.pageIndex).subscribe(data => {
      data.operationalFlights.forEach(item => {
        item.flightLegs = item.flightLegs.sort((lega, legb) => new Date(lega.arrivalInformation.times.scheduled).getTime() - new Date(legb.arrivalInformation.times.scheduled).getTime())
      });
      this.pageInfo = data.page;
      this.flights = data.operationalFlights;  
    });
    return event;
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  public showFlightDetail(){
    this.router.navigateByUrl("flight/detail")
  }

}
