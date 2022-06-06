import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponentComponent } from './pages/content/flight-list-component/flight-list-component.component';

const routes: Routes = [
    {path:'flights', component:FlightListComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
