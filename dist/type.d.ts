export interface County {
    id: string;
    name: string;
}
export interface Zipcode {
    id: string;
    zipcode: number;
    county: string;
    city: string;
}
export interface TwZipcodeData {
    counties: County[];
    zipcodes: Zipcode[];
}
