export interface Entry {
    d: string;
    v: number;
}

export interface TimeSeries {
    entries: Entry[];
}

export interface MktData {
    instrumentId: number;
    timeSeries: TimeSeries;
}

export interface RootObject {
    instruments: MktData[];
}


