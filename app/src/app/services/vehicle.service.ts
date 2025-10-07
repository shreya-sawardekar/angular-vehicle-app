import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle, VehicleDetails } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicles() {
    return this.http.get<Vehicle[]>('./assets/data/mock-vehicle-list.json');
  }

  getVehicleDetails(id: number) {
    return this.http.get<VehicleDetails[]>(
      './assets/data/mock-vehicle-details.json'
    );
  }
}
