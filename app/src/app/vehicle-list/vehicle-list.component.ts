import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'vhapp-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  showVhDetails = false;
  selectedVehicle!: Vehicle;
  vehicleList: Vehicle[] = [];

  constructor(private apiService: VehicleService) {}

  ngOnInit() {
    this.getVehicleList();
  }

  getVehicleList(): void {
    const result$ = this.apiService.getVehicles();
    result$.subscribe({
      next: (res) => {
        if (res) {
          this.vehicleList = res.slice();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showDetails(data: Vehicle): void {
    if (data) {
      this.selectedVehicle = data;
      this.showVhDetails = true;
    } else {
      this.showVhDetails = false;
    }
  }
}
