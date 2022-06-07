export class TrainDataExtract {
	public links : TrainDataLink[]
	public lines: TrainLine[]
}

export class TrainDataLink {
    public href: string;
    public type: string;
    public rel : string;
}


export class TrainLine {
    public id: string;
    public name: string;
    public closing_time: string;
    public opening_time : string;
    public code: string;
    public routes: TrainRoute[];
    public network: TrainLineNetwork;
    public physical_modes: TrainMode[];
    public commercial_mode: TrainMode;

}

export class TrainLineNetwork {
    public id: string;
    public name: string;
}

export class TrainRoute {
    public name: string;
    public id: string;
    public is_frequence: string;
    public direction_type: string;
    public direction: TrainDirection;
}

export class TrainDirection{
    public embedded_type: string;
    public name: string;
    public id: string;
    public stop_area : TrainStopArea
}

export class Coordinates {
    public latitude:number;
    public longitude:number;
}

export class TrainStopArea {
    public label: string;
    public id: string;
    public coord : TrainStopAreaCoord
}

export class TrainStopAreaCoord {
    public lat: string;
    public lon: string;
}

export class TrainMode {
    public id: string;
    public name: string;
}
