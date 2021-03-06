import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon"
import {MatCardModule} from "@angular/material/card"
import {MatButtonModule} from "@angular/material/button"
import {MatGridListModule} from "@angular/material/grid-list"
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import {MatProgressBarModule} from "@angular/material/progress-bar"
import {MatTooltipModule} from "@angular/material/tooltip"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatBadgeModule} from "@angular/material/badge"
import {MatTabsModule} from "@angular/material/tabs"
import {MatTableModule} from "@angular/material/table"
import {MatSliderModule} from "@angular/material/slider"
import {MatListModule} from "@angular/material/list"
import {MatDividerModule} from "@angular/material/divider"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSelectModule} from "@angular/material/select"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatSidenavModule} from "@angular/material/sidenav"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {AppRoutingModule} from "./app-routing.module";
import { FlightListComponentComponent } from './pages/content/flight-list-component/flight-list-component.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { FlightDetailComponent } from './pages/content/flight-detail/flight-detail.component';
import { TrainLinesListComponent } from './pages/content/train-lines-list/train-lines-list.component';
import { FlightOffersListComponent } from './pages/content/flight-offers-list/flight-offers-list.component';
import { FlightOfferDetailComponent } from './pages/content/flight-offers-list/flight-offer-detail/flight-offer-detail.component';
import { FlightOfferFilterComponent } from './pages/content/flight-offers-list/flight-offer-filter/flight-offer-filter.component';
import { FlightOfferStationSearchComponent } from './pages/content/flight-offers-list/flight-offer-station-search/flight-offer-station-search.component';
import { DetailModalComponent } from './pages/modals/detail-modal/detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponentComponent,
    FlightDetailComponent,
    TrainLinesListComponent,
    FlightOffersListComponent,
    FlightOfferDetailComponent,
    FlightOfferFilterComponent,
    FlightOfferStationSearchComponent,
    DetailModalComponent,
  ],
  entryComponents:[
    DetailModalComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatDividerModule,
    ReactiveFormsModule ,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    FlexLayoutModule,
    ScrollingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,MatDialogModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatSliderModule,
    MatBadgeModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 2022-06-06T20:42:07