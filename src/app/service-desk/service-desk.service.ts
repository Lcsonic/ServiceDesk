import { Injectable } from '@angular/core';
import { _ParseAST } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceDeskService {

  private _menus: Menu[] = [];

  constructor() { 
    const _TEMP = localStorage.getItem('_menus');
    this._menus = _TEMP ? JSON.parse(_TEMP): [];
  }

  addChamados(menu: Menu){
    this._menus.push(menu);

    localStorage.setItem('_menus', JSON.stringify(this._menus))
  
  }

  getChamados(): Menu[]{
    return this._menus;
  }

  

}

export class Menu{
  titulo: string;
  descricao: string;
  prioridade: string;
  estado: string;

  constructor(_titulo: string, _descricao: string, _prioridade: string,_estado: string){

    this.titulo = _titulo;
    this.descricao = _descricao;
    this.prioridade = _prioridade;
    this.estado = _estado;

  }
}