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
    public latitutde:number;
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
    public scheduled: Date;
    public latestPublished: Date;
    public estimatedPublic: Date;
    public estimatedTakeOffTime: Date;
}

export enum FlightPublicStatus{
    CANCELLED = "Annulé",
    ARRIVED = "0",
    LANDED = "1",
    EARLY_ARRIVAL ="2",
    DELAYED_ARRIVAL ="3",
    IN_FLIGHT ="4",
    DEPARTED = "5",
    DELAYED_DEPARTURE ="6",
    EARLY_DEPARTURE ="7",
    NEW_EARLY_DEPARTURE_TIME ="8",
    NEW_DEPARTURE_TIME ="9",
    ONTIME ="10",
    DIVERTED = "11"
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