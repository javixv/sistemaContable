import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversionRoutingModule } from './inversion-routing.module';
import { InversionComponent } from './inversion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InversionComponent
  ],
  imports: [
    CommonModule,
    InversionRoutingModule,
    FormsModule
  ]
})
export class InversionModule { }
