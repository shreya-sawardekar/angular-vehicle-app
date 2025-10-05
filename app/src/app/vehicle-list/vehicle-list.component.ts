import { Component } from '@angular/core';

@Component({
  selector: 'vhapp-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent {
  vehicleList: Vehicle[] = [
    {
      id: 1,
      name: 'Sand Crawler',
    },
    {
      id: 2,
      name: 'T-16 skyhopper',
    },
    {
      id: 3,
      name: 'X-34 landspeeder',
    },
    {
      id: 4,
      name: 'TIE/LN starfighter',
    },
    {
      id: 5,
      name: 'Snowspeeder',
    },
    {
      id: 6,
      name: 'TIE bomber',
    },
    {
      id: 7,
      name: 'AT-AT',
    },
    {
      id: 8,
      name: 'AT-ST',
    },
    {
      id: 9,
      name: 'Storm IV Twin-Pod cloud car',
    },
    {
      id: 10,
      name: 'Sail barge',
    },
  ];

  showDetails(data: Vehicle): void {
    console.log({ data });
  }
}

interface Vehicle {
  id: number;
  name: string;
}
