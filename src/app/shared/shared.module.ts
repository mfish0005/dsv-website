import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ButtonComponent } from './button/button.component';

// This is the shared module.  Any module used by multiple other modules should be imported in here.  
// This helps us keep our global components and services separate from our more specific features(like pages for example)
// It also helps us barrel commonly used dependencies together making importing them elsewhere much easier

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    VehicleModule
  ],
  exports: [
    CommonModule,
    ButtonComponent
  ]
})
export class SharedModule { }
