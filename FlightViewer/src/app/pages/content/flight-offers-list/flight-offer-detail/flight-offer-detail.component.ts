import { Component, Input, OnInit } from '@angular/core';
import { RequestRedirectType } from 'src/app/models/FlightDetailModel';
import { Itinerary } from 'src/app/models/FlightModel';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-offer-detail',
  templateUrl: './flight-offer-detail.component.html',
  styleUrls: ['./flight-offer-detail.component.scss']
})
export class FlightOfferDetailComponent implements OnInit {
  @Input() itinerary: Itinerary;
  public RequestRedirectType = RequestRedirectType;
  constructor(private _flightsService: FlightRetrieverService) { 
    
  }

  ngOnInit(): void {
  }

  public showDetail(url: string, dataType: string) {
    this._flightsService.getOffersDetail(url, dataType).subscribe(result => {
      console.log(result);
    })
  }

}
