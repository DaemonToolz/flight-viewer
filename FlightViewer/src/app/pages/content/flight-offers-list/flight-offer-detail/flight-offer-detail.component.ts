import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogPayload, RequestRedirectType } from 'src/app/models/FlightDetailModel';
import { Itinerary } from 'src/app/models/FlightModel';
import { DetailModalComponent } from 'src/app/pages/modals/detail-modal/detail-modal.component';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-offer-detail',
  templateUrl: './flight-offer-detail.component.html',
  styleUrls: ['./flight-offer-detail.component.scss']
})
export class FlightOfferDetailComponent implements OnInit {
  @Input() itinerary: Itinerary;
  public RequestRedirectType = RequestRedirectType;
  private ref: MatDialogRef<DetailModalComponent>;
  constructor(private _flightsService: FlightRetrieverService, private dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  public showDetail(url: string, dataType: RequestRedirectType) {
    this._flightsService.getOffersDetail(url, dataType).subscribe(result => {
      let payload = new DialogPayload(dataType, result)
      this.ref = this.dialog.open(DetailModalComponent, {
        data: payload,
      })
    })
  }

}
