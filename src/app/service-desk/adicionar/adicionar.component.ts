import { Component, OnInit } from '@angular/core';
import { ServiceDeskService, Menu } from '../service-desk.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss'],
})
export class AdicionarComponent implements OnInit {

  /*menu: any = {};
  serviceDesk : ServiceDeskService;*/

  menu: any ={}

  constructor(private _serviceDesk: ServiceDeskService) {}

  ngOnInit() {
    this.menu = [];
  }

  adicionar(logF){
    console.log(logF.value.titulo);
    console.log(logF.value.descricao);
    console.log(logF.value.prioridade);
    console.log(logF.value.estado);

    var info = new Menu(
      logF.value.titulo, 
      logF.value.descricao, 
      logF.value.prioridade, 
      logF.value.estado);
    this._serviceDesk.addChamados(info);

  }

  

  /*adicionar(meuForm){
    let _titulo = meuForm.value.titulo;
    let _descricao = meuForm.value.descricao;
    let _prioridade = meuForm.value.prioridade;
    let _estado = meuForm.value.estado;

    if( _titulo && _descricao && _prioridade && _estado){
      this.serviceDesk.addChamados({
        titulo: _titulo,
        descricao: _descricao,
        prioridade: _prioridade,
        estado: _estado}
        );
        this.local.back();
        alert('Salvo!')
    }else{
      alert('Preencha todos os campos!')
    }
    


  }*/

}
