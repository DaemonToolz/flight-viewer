export class FlightExtract {
    public operationalFlights: Flight[]
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
    public flightLegs: FlightLeg[];
}

export class Airline {
    public name: string;
    public code: string;
}

export class Aircraft {
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

export class Airport {
    public name: string;
    public code: string;
    public city: City;
    public location: Coordinates
}

export class Coordinates {
    public latitude: number;
    public longitude: number;
}

export class City {
    public name: string;
    public code: string;
    public country: Country
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

export enum FlightPublicStatus {
    CANCELLED = "flight.status.cancelled",
    ARRIVED = "flight.status.arrived",
    LANDED = "flight.status.landed",
    EARLY_ARRIVAL = "flight.status.early_arrival",
    DELAYED_ARRIVAL = "flight.status.delayed_arrival",
    IN_FLIGHT = "flight.status.flight",
    DEPARTED = "flight.status.departed",
    DELAYED_DEPARTURE = "flight.status.delayed_departure",
    EARLY_DEPARTURE = "flight.status.delayed_departure",
    NEW_EARLY_DEPARTURE_TIME = "flight.status.new_early_departure",
    NEW_DEPARTURE_TIME = "flight.status.new_departure",
    ONTIME = "flight.status.ontime",
    ON_TIME = "flight.status.ontime",
    DIVERTED = "flight.status.diverted"
}

export class PassengerParam {
    id: number;
    type: string;
    pnrId: number;
    birthDate: string;
    minAge: number;
    maxAge: number;
    ticketNumber: string;
}

export class Itineraries {
    itineraries: Itinerary[];
    totalPriceText: string;
}

export class Itinerary {
    flightProducts: FlightProduct[];
    connections: ConnectionDetail[];
}

export class FlightProduct {
    passengers: PassengerParam[];
    price: PriceResponse;
    connections: Connection[];
    _links: Links;
}

export class PriceResponse {
    displayPrice: number;
    totalPrice: number;
    pricePerPassengerTypes: PricePerPassenger[];
    flexibilityWaiver: boolean;
    currency: string;
    displayType: string;
}

export class PricePerPassenger {
    passengerType: string;
    fare: number;
    taxes: number;
    products: number;
    primaryPax: boolean;
    surcharges: SurchargePrice[];
}

export class SurchargePrice {
    amount: number;
    code: string;
}

export class Connection {
    numberOfSeatsAvailable: number;
    fareBasis: FareBasis;
    segments: Segment[];
    fareFamily: FareFamily;
    commercialCabin: string;
    commercialCabinLabel: string;
    price: PriceResponse;
    _links: Links;
}

export class FareBasis {
    code: string;
}

export class Links {
    flightDetails: Link;
    ticketConditions: Link;
    shoppingCart: Link;
    taxBreakdown: Link;
    priceDetails: Link;
    upsellOffers: Link;
    relatedProducts: Link;
    information: Link;
}

export class Link {
    href: string;
    templated: boolean;
    useRootPath: boolean;
}

export class FareFamily {
    code: string;
    hierarchy: number;
}

export class SellingClass {
    code: string;
}

export class Cabin {
    class: string;
}

export class Segment {
    cabin: Cabin;
    fareBasis: FareBasis;
    sellingClass: SellingClass;
}

export class ConnectionDetail {
    duration: number;
    segments: SegmentDetail[];
}

export class SegmentDetail {
    arrivalDateTime: string;
    departureDateTime: string;
    destination: Airport;
    origin: Airport;
    highestPriority: boolean;
    flightDuration: number;
    dateVariation: number;
    marketingFlight: MarketingFlight;
}

export class MarketingFlight {
    number: string;
    carrier: Carrier;
}

export class OperatingFlight {
    number: string;
    carrier: Carrier;
}

export class EquipmentType {
    code: string;
    name: string;
    acvCode: string;
    _links: Links;
}

export class Carrier {
    code: string;
    name: string;
}

export class StationCity {
    iataStationCode: string
    name: string
    iataCityCode: string
    cityName: string
    iso2CountryCode: string
    countryName: string
    subRegionCode: string
    regionCode: string
    subRegionName: string
    regionName: string
}

export class InputUrl {
    url: string;
    type: string
}


export class StationCityRegion {
    constructor(name: string, code: string){
        this.regions = new Map<string, StationCitySubRegion>();
        this.regionCode = code;
        this.regionName = name;
    }
    regionName: string    
    regionCode: string

    regions : Map<string,StationCitySubRegion>
}

export class StationCitySubRegion {
    constructor(name: string, code: string){
        this.countries = new Map<string, StationCityCountry>();
        this.subRegionCode = code;
        this.subRegionName = name;
    }

    subRegionCode: string
    subRegionName: string
    countries : Map<string,StationCityCountry>
}

export class StationCityCountry {
    constructor(name: string, code: string){
        this.cities = new Map<string, StationCityCity>();
        this.iso2CountryCode = code;
        this.countryName = name;
    }

    iso2CountryCode: string
    countryName: string
    cities : Map<string,StationCityCity>
}

export class StationCityCity {
    constructor(name: string, code: string){
        this.airports = new Map<string, StationCityAirport>();
        this.iataCityCode = code;
        this.cityName = name;
    }

    iataCityCode: string
    cityName: string
    airports : Map<string,StationCityAirport>
}

export class StationCityAirport {
    constructor(name: string, code: string){
        this.iataStationCode = code;
        this.name = name;
    }
    
    iataStationCode: string
    name: string
}