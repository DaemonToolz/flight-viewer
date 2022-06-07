import { Component, OnInit } from '@angular/core';
import { TrainDataExtract } from 'src/app/models/TrainModel';
import { TrainLineRetrieverService } from 'src/app/services/train-line-retriever.service';

@Component({
  selector: 'app-train-lines-list',
  templateUrl: './train-lines-list.component.html',
  styleUrls: ['./train-lines-list.component.scss']
})
export class TrainLinesListComponent implements OnInit {
  public trains: TrainDataExtract;
  constructor(private _trainService: TrainLineRetrieverService) { 
    this._trainService.getTrainExtract().subscribe(data => {
      this.trains = data;
    });
  }

  ngOnInit(): void {
  }

}
