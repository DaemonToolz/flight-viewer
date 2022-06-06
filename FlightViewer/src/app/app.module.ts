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

import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from "./app-routing.module";
import { FlightListComponentComponent } from './pages/content/flight-list-component/flight-list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightListComponentComponent,
  ],
  entryComponents:[
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    FlexLayoutModule,
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

    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }