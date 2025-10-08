import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vehicle, VehicleDetails } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'vhapp-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class VehicleDetailsComponent implements OnChanges {
  @Input() selectedVehicle!: Vehicle;
  vehicleDetails!: VehicleDetails;

  constructor(private apiService: VehicleService) {}

  ngOnChanges(): void {
    if (this.selectedVehicle) {
      this.getVehicleDetails();
    }
  }

  getVehicleDetails() {
    const result$ = this.apiService.getVehicleDetails(this.selectedVehicle.id);
    result$.subscribe({
      next: (res) => {
        if (res) {
          this.vehicleDetails = res.filter(
            (vehicle: VehicleDetails) => vehicle.id === this.selectedVehicle.id
          )[0];
          console.log(this.vehicleDetails);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
