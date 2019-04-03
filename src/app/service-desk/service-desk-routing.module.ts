import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu', component:MenuComponent},
  { path: 'menu/adicionar', component:AdicionarComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }
