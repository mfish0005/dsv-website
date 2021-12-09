import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule
  ],
  // Unlike services, components are not exported from modules by default.  
  // This explicitly tells Angular we want the button component to be available anywhere this module is imported.
  exports: [ButtonComponent]
})
export class ButtonModule { }
