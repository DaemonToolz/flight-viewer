import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { KeyObject } from 'crypto';
import { registerFont } from 'ol/render/canvas';
import { AttachSession } from 'protractor/built/driverProviders';
import { map } from 'rxjs/operators';
import { RequestRedirectType } from 'src/app/models/FlightDetailModel';
import { Flight, StationCity, PageData, FlightPublicStatus, Itinerary, FlightProduct, ConnectionDetail, StationCityRegion, StationCitySubRegion, StationCityCountry, StationCityCity, StationCityAirport, Airport } from 'src/app/models/FlightModel';
import { OfferFilteringOptions } from 'src/app/models/OfferFilteringOption';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

@Component({
  selector: 'app-flight-offers-list',
  templateUrl: './flight-offers-list.component.html',
  styleUrls: ['./flight-offers-list.component.scss']
})
export class FlightOffersListComponent implements OnInit {
  @ViewChild("drawer") drawer: MatDrawer;

  public selectedFlight: Itinerary;

  public FlightPublicStatus = FlightPublicStatus;

  public flights: Itinerary[] = new Array<Itinerary>();
  public stations: Map<string, StationCityRegion> = new Map<string, StationCityRegion>();

  public showFilter: boolean;
  public showOfferDetail: boolean;

  constructor(private _flightsService: FlightRetrieverService, private router: Router) {
    this.loadStations();
  }

  ngOnInit(): void {
  }

  public get allRegions(): Array<StationCityRegion> {
    return [...this.stations.values()];
  }

  public DisplayDetail(selectedFlight: Itinerary) {
    this.selectedFlight = selectedFlight;
    this.showOfferDetail = true;
    this.showFilter = false;
    this.drawer.open()
  }

  public search(filteringOptions: OfferFilteringOptions) {
    this.drawer.close();
    this._flightsService.getOffersForDate(filteringOptions.departureDate, filteringOptions.departureStation, filteringOptions.arrivalStation).subscribe(data => {
      this.flights = data;
    })
  }

  public loadStations() {
    const stat = this.stations
    this._flightsService.getStations().subscribe(data => {
      data.forEach(airport => {
        let scity: StationCityRegion
        if (stat.has(airport.regionCode)) {
          scity = stat.get(airport.regionCode);
          this.addSubRegionToEntry(scity, airport);
          stat.set(airport.regionCode, scity);
        } else {
          this.createNewAirportEntry(airport)
        }
      })
      
    })
  }


  public createNewAirportEntry(airport: StationCity) {
    let scity: StationCityRegion = new StationCityRegion(airport.regionName, airport.regionCode);
    let sregion: StationCitySubRegion = new StationCitySubRegion(airport.subRegionName, airport.subRegionCode);
    let country: StationCityCountry = new StationCityCountry(airport.countryName, airport.iso2CountryCode);
    let city: StationCityCity = new StationCityCity(airport.cityName, airport.iataCityCode);
    let air: StationCityAirport = new StationCityAirport(airport.name, airport.iataStationCode);
    city.airports.set(air.iataStationCode, air)
    country.cities.set(city.iataCityCode, city)
    sregion.countries.set(country.iso2CountryCode, country)
    scity.regions.set(sregion.subRegionCode, sregion)
    this.stations.set(airport.regionCode, scity);
  }

  public addAirportToEntry(entry: StationCityCity, airport: StationCity) {
    entry.airports.set(airport.iataStationCode, new StationCityAirport(airport.name, airport.iataStationCode));
  }

  public addCityToEntry(entry: StationCityCountry, airport: StationCity) {
    let air: StationCityCity;
    if (entry.cities.has(airport.iataCityCode)) {
      air = entry.cities.get(airport.iataCityCode)
    } else {
      air = new StationCityCity(airport.cityName, airport.iataCityCode)
    }
    this.addAirportToEntry(air, airport)
    entry.cities.set(air.iataCityCode, air);
  }

  public addCountryToEntry(entry: StationCitySubRegion, airport: StationCity) {
    let ct: StationCityCountry
    if (entry.countries.has(airport.iso2CountryCode)) {
      ct = entry.countries.get(airport.iso2CountryCode);
    } else {
      ct = new StationCityCountry(airport.countryName, airport.iso2CountryCode);
    }
    this.addCityToEntry(ct, airport);
    entry.countries.set(airport.iso2CountryCode, ct);
  }

  public addSubRegionToEntry(entry: StationCityRegion, airport: StationCity) {
    let sregion: StationCitySubRegion
    if (entry.regions.has(airport.subRegionCode)) {
      sregion = entry.regions.get(airport.subRegionCode);
    } else {
      sregion = new StationCitySubRegion(airport.subRegionName, airport.subRegionCode);
    }

    this.addCountryToEntry(sregion, airport)
    entry.regions.set(airport.subRegionCode, sregion);
  }

  public getFlightsHoursFromMinutes(minutes: string): Date {
    return new Date(0, 0, 1, 0, +minutes, 0, 0);
  }

  public getFlightDaysFromMinutes(minutes: string): number {
    return new Date(0, 0, 1, 0, +minutes, 0, 0).getDate() - 1;
  }


  public getFlightsHoursFromMinuteNum(minutes: number): Date {
    return new Date(0, 0, 1, 0, minutes, 0, 0);
  }

  public getFlightDaysFromMinutesNum(minutes: number): number {
    return new Date(0, 0, 1, 0, minutes, 0, 0).getDate() - 1;
  }

  public getConnectionLabel(it: ConnectionDetail): string {
    if (it.segments.length == 1) {
      return "offer.flight.direct"
    }

    return "offer.flight.connection"
  }

  public closeDrawer() {
    this.showOfferDetail = false;
    this.showFilter = false;
    this.selectedFlight = null;
    this.drawer.close()
  }

  public showSearchOptions() {
    this.showOfferDetail = false;
    this.showFilter = true;
    this.drawer.open()
  }

}
