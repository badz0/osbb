export class AddressDTO {
    id: number;
    text: string;
}

export class Region {
     id: number;
     name: string;
}

export class City {
     id: number;
     name: string;
     region: Region;
}

export class Street {
     id: number;
     name: string;
     city: City;
}

export class District {
     id: number;
     name: string;
     city: City;
}
