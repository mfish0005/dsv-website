import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

// This is just an example service that returns cost info about a vehicle.  It's just to show that business logic that could be shared in multiple feature modules should live in it's own module inside shared
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor() { }

  getVehicleCostInfo(vehicle: Vehicle): string {
    return `Your ${vehicle.year} ${vehicle.make} ${vehicle.model} costs $${vehicle.cost}`;
  }
}
