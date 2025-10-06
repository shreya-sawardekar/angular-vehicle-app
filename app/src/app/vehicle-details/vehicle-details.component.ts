import { Component, Input } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'vhapp-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent {
  @Input() vehicleDetails!: Vehicle;
}
