export interface Vehicle {
  id: number;
  name: string;
}

export interface VehicleDetails {
  id: number;
  name: string;
  classification: string;
  price: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  films: string[];
}
