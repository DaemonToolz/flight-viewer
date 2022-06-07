import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/FlightModel';
import { TrainDataExtract } from '../models/TrainModel';
import { GenericHttpService } from './generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class TrainLineRetrieverService extends GenericHttpService<any> {

  constructor(_http: HttpClient, private datePipe: DatePipe) { 
    super(_http);
    this.init(environment.services.sncf_api); 
  }

  public getTrainExtract():Observable<TrainDataExtract> {
    return this.get(`/lines`)
  }


}
