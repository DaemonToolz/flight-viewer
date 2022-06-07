import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightDetailComponent } from './pages/content/flight-detail/flight-detail.component';
import { FlightListComponentComponent } from './pages/content/flight-list-component/flight-list-component.component';
import { TrainLinesListComponent } from './pages/content/train-lines-list/train-lines-list.component';

const routes: Routes = [
    {path:'flights', component:FlightListComponentComponent},
    {path:'flight/:id/detail', component:FlightDetailComponent},
    {path:'trains/lines', component:TrainLinesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
