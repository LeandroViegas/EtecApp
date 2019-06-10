import { Component, OnInit } from '@angular/core';
import { PassandoDadosService } from '../servicos/passando-dados.service';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  constructor(public Dados: PassandoDadosService) { }

  public noticia = null;

  ngOnInit(){
    this.noticia = this.Dados.getDados("noticia");
  }
}
