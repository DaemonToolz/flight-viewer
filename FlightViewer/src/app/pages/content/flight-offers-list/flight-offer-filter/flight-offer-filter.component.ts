import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { StationCity, StationCityAirport, StationCityRegion } from 'src/app/models/FlightModel';
import { OfferFilteringOptions } from 'src/app/models/OfferFilteringOption';

export enum FilteringType {
  None,
  DepartureStation,
  ArrivalStation
}

@Component({
  selector: 'app-flight-offer-filter',
  templateUrl: './flight-offer-filter.component.html',
  styleUrls: ['./flight-offer-filter.component.scss']
})
export class FlightOfferFilterComponent implements OnInit {
  @Input() public stations: Array<StationCityRegion>;
  public dateFormCtrl = new FormControl(new Date());
  public filteringOptions: OfferFilteringOptions = new OfferFilteringOptions();
  public readonly minDate : Date;
  
  public FilteringType = FilteringType;
  public currentFilter: FilteringType = FilteringType.None

  public from: StationCityAirport;
  public to: StationCityAirport;



  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  constructor() { 
    this.minDate = new Date(Date.now())
    this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() +  3))
  }

  ngOnInit(): void {
  }

  public search(){
    this.filteringOptions.departureDate = this.dateFormCtrl.value;
    this.filteringOptions.departureStation = this.from.iataStationCode;
    this.filteringOptions.arrivalStation = this.to.iataStationCode;
    
    this.onSearch.emit(this.filteringOptions);
  }

  public get hasNoFilterApplied(){
    return this.currentFilter == FilteringType.None
  }

  public get hasDepartureFilter(){
    return this.currentFilter == FilteringType.DepartureStation
  }

  public get hasArrivalFilter(){
    return this.currentFilter == FilteringType.ArrivalStation
  }

  public onDataSubmit($event){
    if(this.currentFilter == FilteringType.ArrivalStation && $event != null){
      this.to = $event
    }

    if(this.currentFilter == FilteringType.DepartureStation && $event != null){
      this.from = $event
    }

    this.currentFilter = FilteringType.None
  }

}
