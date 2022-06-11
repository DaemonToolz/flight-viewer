import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StationCity, StationCityAirport, StationCityCity, StationCityCountry, StationCityRegion, StationCitySubRegion } from 'src/app/models/FlightModel';


@Component({
  selector: 'app-flight-offer-station-search',
  templateUrl: './flight-offer-station-search.component.html',
  styleUrls: ['./flight-offer-station-search.component.scss']
})
export class FlightOfferStationSearchComponent implements OnInit {
  @Input() public stations: Array<StationCityRegion>;
  @Output() public onSubmit: EventEmitter<StationCityAirport> = new EventEmitter();

  public selectedRegion: StationCityRegion;
  public selectedSubRegion: StationCitySubRegion;
  public selectedCountry: StationCityCountry;
  public selectedCity: StationCityCity;
  public selectedAirport : StationCityAirport;

  constructor() { }

  ngOnInit(): void {

  }

  public submitResult(payload: StationCityAirport){
    this.onSubmit.emit(payload);
  }

  public selectRegion(region: StationCityRegion) {
    if(region == this.selectedRegion){
      region = null;
    }
    this.selectedRegion = region
    this.selectSubRegion(null);
  }

  public selectSubRegion(sRegion: StationCitySubRegion) {
    if(sRegion == this.selectedSubRegion){
      sRegion = null;
    }
    this.selectedSubRegion = sRegion
    this.selecCountry(null);
  }

  public selecCountry(country: StationCityCountry) {
    if(country == this.selectedCountry){
      country = null;
    }
    this.selectedCountry = country
    this.selectCity(null);
  }

  public selectCity(city: StationCityCity) {
    if(city == this.selectedCity){
      city = null;
    }
    this.selectedCity = city
    this.selectAirport(null);
  }

  public selectAirport(airport: StationCityAirport) {
    if(airport == this.selectedAirport){
      airport = null;
    }
    this.selectedAirport = airport
  }

  public get getAllRegions(): StationCityRegion[] {
    if(this.selectedRegion != null){
      return new Array(this.selectedRegion)
    }
    return [...this.stations]
  }


  public get getAllSubregions(): StationCitySubRegion[] {
    if(this.selectedSubRegion != null){
      return new Array(this.selectedSubRegion)
    }
    return [...this.selectedRegion.regions.values()]
  }

  public get getAllCountries(): StationCityCountry[] {
    if(this.selectedCountry != null){
      return new Array(this.selectedCountry)
    }
    return [...this.selectedSubRegion.countries.values()]
  }

  public get getAllCities(): StationCityCity[] {
    if(this.selectedCity != null){
      return new Array(this.selectedCity)
    }
    return [...this.selectedCountry.cities.values()]
  }

  public get getAllAirports(): StationCityAirport[] {
    if(this.selectedAirport != null){
      return new Array(this.selectedAirport)
    }
    return [...this.selectedCity.airports.values()]
  }


  public isRegionSelected(entry: StationCityRegion) {
    return this.selectedRegion?.regionCode == entry.regionCode
  }

  public isSubRegionSelected(entry: StationCitySubRegion) {
    return this.selectedSubRegion?.subRegionCode == entry.subRegionCode
  }

  public isCountrySelected(entry: StationCityCountry) {
    return this.selectedCountry?.iso2CountryCode == entry.iso2CountryCode
  }

  public isCitySelected(entry: StationCityCity) {
    return this.selectedCity?.iataCityCode == entry.iataCityCode
  }

  public isAirportSelected(entry: StationCityAirport) {
    return this.selectedAirport?.iataStationCode == entry.iataStationCode
  }


}
