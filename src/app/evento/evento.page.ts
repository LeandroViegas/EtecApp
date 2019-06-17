import { Component, OnInit } from '@angular/core';
import { PassandoDadosService } from '../servicos/passando-dados.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(public recebeDados: PassandoDadosService) { }

 public evento = null;

  ngOnInit() {
  this.evento = this.recebeDados.getDados("evento");
  console.log(this.evento);
  }

  

}
