export class FlightExtract {
	public operationalFlights : Flight[]
	public page: PageData
}

export class PageData {
    public pageSize: number;
    public pageNumber: number;
    public fullCount: number;
    public pageCount: number;
    public totalPages: number;
}

export class Flight {
    public flightNumber: number;
    public flightScheduleDate: Date;
    public id: string;
    public flightStatusPublic: FlightPublicStatus;
    public airline: Airline;
    public flightLegs : FlightLeg[];
}

export class Airline {
    public name: string;
    public code: string;
}

export class Aircraft  {
	registration: string 
	typeCode: string
	typeName: string
}

export class FlightLeg {
    public status: string;
    public legStatusPublic: FlightPublicStatus;
    public serviceType: string;
    public completionPercentage: string; 
    public aircraft: Aircraft;
    public departureInformation: FlightStationInformation;
    public arrivalInformation: FlightStationInformation;
}

export class FlightStationInformation {
    public airport: Airport;
    public times: FlightETAData;
}

export class Airport{
    public name: string;
    public code: string;
    public city: City;
    public location : Coordinates
}

export class Coordinates {
    public latitude:number;
    public longitude:number;
}

export class City {
    public name: string;
    public code: string;
    public country : Country
}

export class Country {
    public name: string;
    public code: string;
}

export class FlightETAData {
    public scheduled: string;
    public latestPublished: string;
    public estimatedPublic: string;
    public estimatedTakeOffTime: string;
}

export enum FlightPublicStatus{
    CANCELLED = "flight.status.cancelled",
    ARRIVED = "flight.status.arrived",
    LANDED = "flight.status.landed",
    EARLY_ARRIVAL ="flight.status.early_arrival",
    DELAYED_ARRIVAL ="flight.status.delayed_arrival",
    IN_FLIGHT ="flight.status.flight",
    DEPARTED = "flight.status.departed",
    DELAYED_DEPARTURE ="flight.status.delayed_departure",
    EARLY_DEPARTURE ="flight.status.delayed_departure",
    NEW_EARLY_DEPARTURE_TIME ="flight.status.new_early_departure",
    NEW_DEPARTURE_TIME ="flight.status.new_departure",
    ONTIME ="flight.status.ontime",
    ON_TIME ="flight.status.ontime",
    DIVERTED = "flight.status.diverted"
}


/*

type FlightLeg struct {
	Departure       FlightStationInformation `json:"departureInformation"`
	Arrival         FlightStationInformation `json:"arrivalInformation"`

	Irregulary      Irregularities           `json:"irregulary"`
}

type FlightStationInformation struct {
	Airport Airport       `json:"airport"`
	Times   FlightETAData `json:"times"`
}

type FlightETAData struct {
	Scheduled        time.Time `json:"scheduled"`
	LatestPublished  time.Time `json:"latestPublished"`
	EstimatedPublic  time.Time `json:"estimatedPublic"`
	EstimatesTakeOff time.Time `json:"estimatedTakeOffTime"`
}

type Place struct {
	Gates        []string `json:"gateNumber"`
	Parking      string   `json:"parkingPosition"`
	PierCode     string   `json:"pierCode"`
	Terminal     string   `json:"terminal"`
	BoardingPier string   `json:"boardingPier"`
}

type Aircraft struct {
	Registration     string `json:"registration"`
	TypeCode         string `json:"typeCode"`
	TypeName         string `json:"typeName"`
	OwnerAirlineCode string `json:"ownerAirlineCode"`
	OwnerAirlineName string `json:"ownerAirlineName"`
}


*/