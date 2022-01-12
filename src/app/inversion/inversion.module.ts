import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversionRoutingModule } from './inversion-routing.module';
import { InversionComponent } from './inversion.component';


@NgModule({
  declarations: [
    InversionComponent
  ],
  imports: [
    CommonModule,
    InversionRoutingModule
  ]
})
export class InversionModule { }
