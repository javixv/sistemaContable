import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { InversionRoutingModule } from './inversion-routing.module';
import { InversionComponent } from './inversion.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    InversionComponent
  ],
  imports: [
    CommonModule,
    InversionRoutingModule,
    
    FormsModule,
    SweetAlert2Module,
    NgxPaginationModule,
  ]
})
export class InversionModule { }
