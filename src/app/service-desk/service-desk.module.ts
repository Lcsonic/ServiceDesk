import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { GeralModule } from '../geral/geral.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    AdicionarComponent,
  ],
  imports: [
    ServiceDeskRoutingModule,
    GeralModule,
  ]
})
export class ServiceDeskModule { }
