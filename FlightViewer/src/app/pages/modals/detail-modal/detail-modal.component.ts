import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPayload, PriceDetailResult, RequestRedirectType, TaxBreakdownDetailResult, TicketConditionsResponse } from 'src/app/models/FlightDetailModel';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {
  public taxBreadownData: TaxBreakdownDetailResult;
  public detailResult: PriceDetailResult;
  public condition: TicketConditionsResponse;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogPayload) { 
    switch(data.type){
      case RequestRedirectType.PriceDetail:
        this.detailResult = <PriceDetailResult>data.payload;
        break;
        
      case RequestRedirectType.TaxBreakdown:
        this.taxBreadownData = <TaxBreakdownDetailResult>data.payload;
        break;
        
      case RequestRedirectType.TicketCondition:
        this.condition = <TicketConditionsResponse>data.payload;
        break;
    }
  }

  ngOnInit(): void {
  }

}
