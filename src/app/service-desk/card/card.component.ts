import { Component, OnInit, Input } from '@angular/core';
import { Menu, ServiceDeskService } from '../service-desk.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  ngOnInit() {}

  @Input() titulo: string;
  @Input() descricao: string;
  @Input() prioridade: string;
  @Input() estado: string;

}
