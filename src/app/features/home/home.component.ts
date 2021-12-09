import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/vehicle/models/vehicle.model';
import { VehicleService } from 'src/app/shared/vehicle/services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicleCostInfo: string;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    const vehicle: Vehicle = {
      make: 'Toyota',
      model: 'Tacoma',
      year: 2006,
      cost: 8000
    };

    this.vehicleCostInfo = this.vehicleService.getVehicleCostInfo(vehicle);
  }
}
