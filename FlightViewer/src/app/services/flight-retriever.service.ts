import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight, FlightExtract, FlightProduct, Itineraries, StationCity } from '../models/FlightModel';
import { GenericHttpService } from './generic-http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlightRetrieverService extends GenericHttpService<any> {

  constructor(_http: HttpClient, private datePipe: DatePipe) { 
    super(_http);
    this.init(environment.services.airfrance_api); 
  }

  public getFlightExtract(begin: Date, end: Date, page:number = 0):Observable<FlightExtract> {
    return this.get(`/flights?page=${page}&start=${this.datePipe.transform(begin,'yyyy-MM-ddTHH:mm:ss')+'Z'}&end=${this.datePipe.transform(end, 'yyyy-MM-ddTHH:mm:ss')+'Z'}`)
  }

  public getFlight(id:string):Observable<Flight> {
    return this.get(`/flights/${id}`)
  }


  public getStations():Observable<StationCity[]> {
    return this.getArray(`/stations`)
  }

  public getOffersForDate(date: Date, from: string, to:string):Observable<FlightProduct[]> {
    return this.getArray(`/offers?date=${this.datePipe.transform(date,'yyyy-MM-dd')}&from=${from}&to=${to}`)
  }

}
