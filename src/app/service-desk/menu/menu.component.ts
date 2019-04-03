import { Component, OnInit } from '@angular/core';
import { ServiceDeskService, Menu } from '../service-desk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];

  constructor(
    private service: ServiceDeskService,
    ) { }

  ngOnInit() {}

    listar(){
      this.menus = this.service.getChamados();
    }

}



