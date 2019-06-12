import { Component, OnInit } from '@angular/core';
import { PassandoDadosService } from '../servicos/passando-dados.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  constructor(public Dados: PassandoDadosService) { }

  public noticia = null;

  ngOnInit(){
    this.noticia = this.Dados.getDados("noticia");
  }

}
