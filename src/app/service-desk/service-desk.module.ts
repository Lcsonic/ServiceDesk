import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { GeralModule } from '../geral/geral.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ServiceDeskRoutingModule,
    GeralModule,
  ]
})
export class ServiceDeskModule { }
