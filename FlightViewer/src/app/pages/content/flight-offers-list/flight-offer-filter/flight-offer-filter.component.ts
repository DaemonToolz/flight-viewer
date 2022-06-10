import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { StationCity, StationCityRegion } from 'src/app/models/FlightModel';
import { OfferFilteringOptions } from 'src/app/models/OfferFilteringOption';

@Component({
  selector: 'app-flight-offer-filter',
  templateUrl: './flight-offer-filter.component.html',
  styleUrls: ['./flight-offer-filter.component.scss']
})
export class FlightOfferFilterComponent implements OnInit {
  public dateFormCtrl = new FormControl(new Date());
  public filteringOptions: OfferFilteringOptions = new OfferFilteringOptions();
  public readonly minDate : Date;
  @Input() public stations: Array<StationCityRegion>;


  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  constructor() { 
    this.minDate = new Date(Date.now())
    this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() +  3))
    console.log(this.stations);
  }

  ngOnInit(): void {
  }

  public search(){
    this.filteringOptions.departureDate = this.dateFormCtrl.value;
    this.onSearch.emit(this.filteringOptions);
  }



}
