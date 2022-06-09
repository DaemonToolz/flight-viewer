export enum RequestRedirectType {
	PriceDetail = "price_detail",
	TaxBreakdown = "tax_breakdown",
	TicketCondition = "ticket_condition"
}

export class TaxBreakdownDetailResult {
    price: TaxPriceDetail;
}

export class TaxPriceDetail {
    totalPrice: number;
    totalFare: number;
    totalTaxes: number;
    totalProducts: number;
    totalTaxesWithoutAirTransportationSurcharges: number;
    totalSurcharges: TaxPriceDetailExtract[];
    totalAirTransportationSurcharges: TaxPriceDetailExtract[];
    pricePerPassengerTypes: TaxPricePerPassengerType[];
    currency: string;
}

export class TaxPricePerPassengerType {
    products: number;
    passengerType: string;
    fare: number;
    fareDetails: TaxPriceDetailExtract[];
    taxes: TaxPriceDetailExtract[];
    surcharges: TaxPriceDetailExtract[];
    airTransportationSurcharges: TaxPriceDetailExtract;
}

export class TaxPriceDetailExtract {
    code: string;
    amount: number;
    name: string;
}

export class PriceDetailResult {
    priceDetails: PriceDetail;
}

export class PriceDetail {
    totals: PriceTotal[];
    priceCategories: PricePerCategory[];
}

export class PriceTotal {
    currency: string;
    amount: number;
    pricePerPassengers: PricePerPassengerDetail[];
}

export class PricePerPassengerDetail {
    passengerId: number;
    amount: number;
}

export class PricePerCategory {
    code: string;
    label: string;
    totals: PriceTotal[];
    priceComponents: PriceComponent[];
}

export class PriceComponent {
    code: string;
    label: string;
    currency: string;
    amount: number;
    pricePerPassengers: PricePerPassengerDetail[];
    priceComponentBreakdown?: PriceComponentBreakdown[];
}

export class PriceComponentBreakdown {
    code: string;
    nature: string;
    label: string;
    amount: number;
    pricePerPassengers: PricePerPassengerDetail[];
}

export class TicketConditionsResponse {
    passengers: PassengerTicketCondition[];
    sameConditions: boolean;
    connections: ConnectionTicketCondition[];
    bookingDateInterval: BookingIntervalCondition;
    flyingBlue: FlyingBlueTicketCondition;
    disclaimer: TicketConditionDisclaimer;
}

export class TicketConditionDisclaimer {
    handBaggageText: string;
    flexibilityText: string;
}

export class BookingIntervalCondition {
    from: string;
    to: string;
}

export class TicketCommercialText {
    relevance: number;
    text: string;
}

export class FlyingBlueTicketCondition {
    earned: number;
    detailsText: string;
    qualifyingPoints: number;
    ultimateQualifyingPoints: number;
    detailsTextQualPoints: string;
    commercialText: PassengerTicketCondition;
}

export class PassengerTicketCondition {
    id: number;
    type: string;
    primaryPassenger: boolean;
}

export class FarePercentage {
    farePercentage: number;
}

export class SkyPriorityCondition {
    commercialText: TicketCommercialText;
    detailsText: string;
    allowed: boolean;
}

export class AdvancedPurchaseCondition {
    stayDuration: StayDuration;
    detailsText: string;
}

export class StayDuration {
    duration: number;
    stayUnit: string;
}

export class CancelCondition {
    allowedBeforeDeparture: boolean;
    allowedAfterDeparture: boolean;
    commercialText: TicketCommercialText;
    afterDepartureDetailsText: string;
    beforeDepartureDetailsText: string;
    extraCostsText: string;
}

export class ChangeCondition {
    allowedBeforeDeparture: boolean;
    allowedAfterDeparture: boolean;
    commercialText: TicketCommercialText;
    afterDepartureDetailsText: string;
    beforeDepartureDetailsText: string;
}

export class NoShowCondition {
    commercialText: TicketCommercialText;
    detailsText: string;
    allowed: boolean;
}

export class ConditionPerPassengerDetail {
    infantDiscountCondition?: FarePercentage;
    childrenDiscountCondition?: FarePercentage;
    skyPriorityCondition?: SkyPriorityCondition;
    advancePurchaseCondition?: AdvancedPurchaseCondition;
    cancelCondition?: CancelCondition;
    changeCondition?: ChangeCondition;
    noShowCondition?: NoShowCondition;
}

export class FareFamilyCondition {
    code: string;
    hierarchy: number;
    title: string;
    commercialDescription: string;
}

export class BaggageAllowance {
    quantity: number;
    type: string;
    commercialText: TicketCommercialText;
    detailsText: string;
    handBaggageDetailsText: string;
}

export class FlyingBlueDetail {
    earned: number;
    detailsText: string;
    qualifyingPoints: number;
    ultimateQualifyingPoints: number;
    detailsTextQualPoints: string;
    commercialText: TicketCommercialText;
}

export class ConditionPerPassenger {
    passengerId: number;
    conditions: ConditionPerPassengerDetail[];
    fareFamily: FareFamilyCondition;
    baggageAllowance: BaggageAllowance;
    flyingBlue: FlyingBlueDetail;
    travelClassText: string;
    tripText: string;
}

export class ConnectionTicketCondition {
    travelDateIntervals: BookingIntervalCondition[];
    conditionsPerPassenger: ConditionPerPassenger[];
    conditions: ConditionPerPassengerDetail[];
    fareFamily: FareFamilyCondition;
    baggageAllowance: BaggageAllowance;
    flyingBlue: FlyingBlueDetail;
    travelClassText: string;
    tripText: string;
}