import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/FlightModel';
import { GenericHttpService } from './generic-http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightRetrieverService extends GenericHttpService<Flight> {

  constructor(_http: HttpClient) { 
    super(_http);
    this.init(environment.services.airfrance_api); 
  }

  public getFlights():Observable<Flight[]> {
    return this.getArray("/flights")
  }

  public getFlight(id:string):Observable<Flight> {
    return this.get(`/flights/${id}`)
  }

}
