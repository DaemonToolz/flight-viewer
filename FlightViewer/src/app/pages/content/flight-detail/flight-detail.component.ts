
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordinates, Flight, FlightLeg, FlightPublicStatus, FlightStationInformation } from 'src/app/models/FlightModel';
import { FlightRetrieverService } from 'src/app/services/flight-retriever.service';

import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';


import { fromLonLat } from 'ol/proj';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { LineString, Point } from 'ol/geom';
import { Icon, Stroke, Text } from 'ol/style';
import { Coordinate } from 'ol/coordinate';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit, AfterViewInit {

  public options: any;
  public FlightPublicStatus = FlightPublicStatus;
  public flight: Flight;

  public map: Map;
  public center:Coordinate;
  public vectorSource: VectorSource;
  public vectorLayer: VectorLayer<any>;
  public xyzSource: XyzSource;
  public tileLayer: TileLayer<any>;
  public view: View;
  public markers: Array<Feature> = new Array<Feature>();
  private _isInit: boolean;


  constructor(private route: ActivatedRoute, private router: Router, private _flightsService: FlightRetrieverService) {
    if (<Flight>this.router.getCurrentNavigation().extras.state == null) {
      this.getFlight(this.route.snapshot.paramMap.get('id'));
      
    } else {
      this.flight = <Flight>this.router.getCurrentNavigation().extras.state.data;
    }

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      if(!this._isInit){
        this.updateArrivalData();
      }
  }

  public getFlight(id: string) {
    this._flightsService.getFlight(id).subscribe(data => {
      data.flightLegs = data.flightLegs.sort((lega, legb) => new Date(lega.arrivalInformation.times.scheduled).getTime() - new Date(legb.arrivalInformation.times.scheduled).getTime())
      this.flight = data;
      if (!this._isInit) {
        this._isInit = true;
        this.updateArrivalData();
      }
    });
  }

  public flightStatusClass(flight: FlightLeg): string {
    return `leg-parent-${flight.legStatusPublic.toLocaleLowerCase()}`
  }

  public getStrokeColor(flight: FlightLeg): string {
    switch (FlightPublicStatus[flight.legStatusPublic]) {
      case FlightPublicStatus.CANCELLED:
        return "#b53f3f"
      case FlightPublicStatus.ARRIVED:
        return "#4db53f";
    }
    return "#3f51b5"
  }

  public getStrokeLabel(flight: FlightLeg): string {
    return FlightPublicStatus[flight.legStatusPublic]
  }

  public updateArrivalData() {

    this.flight.flightLegs.forEach(data => {
      this.markers.push(this.getMarkerFromStation(data.arrivalInformation))
      this.markers.push(this.getMarkerFromStation(data.departureInformation))
  
      if(+data.completionPercentage > 0 && +data.completionPercentage < 100){
        let mid = this.getCoordinateFromlineString(this.getGeoloc(data.departureInformation),  this.getGeoloc(data.arrivalInformation), +data.completionPercentage)
        var totalTravel = new Date(new Date(data.arrivalInformation.times.scheduled).getTime() - new Date(data.departureInformation.times.scheduled).getTime());
        let doneTravel = new Date(totalTravel.getTime()*(+data.completionPercentage/100))
        let remainTravel = new Date(totalTravel.getTime() - doneTravel.getTime())
        this.center = mid;
        this.markers.push(this.getMarkerFromLoc(mid));
        this.markers.push(this.getLineFromGeoloc(mid, this.getGeoloc(data.arrivalInformation), "#d5e4d3", `${this.getStrokeLabel(data)} \n Restant : ${remainTravel.toTimeString()}`))
        this.markers.push(this.getLineFromGeoloc(this.getGeoloc(data.departureInformation), mid, "#4db53f", `${this.getStrokeLabel(data)} \n Effectué : ${doneTravel.toTimeString()}`))
      } else {
        let lineColor = this.getStrokeColor(data);
        let mid = this.getCoordinateFromlineString(this.getGeoloc(data.departureInformation),  this.getGeoloc(data.arrivalInformation), 50)
        this.center = mid;
        let timeToTravel = new Date(new Date(data.arrivalInformation.times.scheduled).getTime() - new Date(data.departureInformation.times.scheduled).getTime()).toTimeString()
        this.markers.push(this.getLineFromGeoloc(this.getGeoloc(data.departureInformation), this.getGeoloc(data.arrivalInformation), lineColor, `${this.getStrokeLabel(data)} \n ${timeToTravel}`))
      }
      
    })

    this.vectorSource = new VectorSource({
      features: this.markers,
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });

    // XYZ
    this.xyzSource = new XyzSource({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.tileLayer = new TileLayer({
      source: this.xyzSource
    });

    // View and map
    this.view = new View({
      center: this.center,
      zoom: 4,
    })

    this.map = new Map({
      target: 'ol-map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view
    });
  }

  public getMarkerFromStation(fsi: FlightStationInformation): Feature {
    let coords = this.getGeoloc(fsi);
    let style = new Style({
      image: new Icon({
        anchor: [0.5, 41],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'assets/map/marker-icon.png',
      }),
      text: new Text({
        text: fsi.airport.name,
        backgroundFill: new Fill({
          color: "#3f51b5",
        }),

      })
    })

    style.getText().getFill().setColor('white');

    let feature = new Feature({
      geometry: new Point(coords)
    })

    feature.setStyle(style);
    return feature;
  }

  public getMarkerFromLoc(coords: Coordinate): Feature {
    let style = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: 'assets/map/plane-icon.png',
      })
    })

    let feature = new Feature({
      geometry: new Point(coords)
    })

    feature.setStyle(style);
    return feature;
  }

  public getLineFromGeoloc(from: Coordinate, to: Coordinate, strikeColor: string, label: string): Feature {
    let style = new Style({
      stroke: new Stroke({
        width: 2,
        color: strikeColor
      }),
      text: new Text({
        text: label,
        backgroundFill: new Fill({
          color: "white",
        })
      })
    })
    style.getText().getFill().setColor("black");
    let feature = new Feature({
      geometry: new LineString([from, to])
    })

    feature.setStyle(style);
    return feature;
  }

  public getCoordinateFromlineString(from: Coordinate, to: Coordinate, fract: number): Coordinate {
    return (new LineString([from, to]).getCoordinateAt(fract/100))
  }

  public getGeoloc(fsi: FlightStationInformation): Coordinate {
    return fromLonLat([fsi.airport.location.longitude, fsi.airport.location.latitude]);
  }
}
function cos(lat2: number) {
  throw new Error('Function not implemented.');
}

function sin(long2: number) {
  throw new Error('Function not implemented.');
}

