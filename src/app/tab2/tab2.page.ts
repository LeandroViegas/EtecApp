import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassandoDadosService } from '../servicos/passando-dados.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  constructor(private rota: Router, public enviaDados: PassandoDadosService) { }
z
  ngOnInit() {

  }

  public eventos = [
    {
      nome: "Bingo",
      img: "https://previews.123rf.com/images/sid10/sid101609/sid10160900006/66717490-vector-colorful-bingo-lottery-number-balls-colored-balls-isolated-bingo-ball-bingo-balls-with-number.jpg",
      descricao_min: "Participe do bingo benificiente. Ganhe prêmios e se divirta com amigos...",
      descricao_max: "Participe do bingo benificiente. Ganhe prêmios e se divirta com amigos e coma os melhores salgados e petiscos, saboreando uma deliciosa cerveja.",
      local: "Salão de festas São Pedro.",
      horario: "Das 19:00h as 22:30."
    },
    
    {
      nome: "Show de Talentos",
      img: "http://www.anglosorocaba.com.br/shared/upload/fund2_projetos/37_1273_7679.jpg",
      descricao_min: "Mostre seu talento no show de talentos da Escola Etec. Evento que promete...",
      descricao_max: "Mostre seu talento no show de talentos da Escola Etec. Evento que promete relevar grandes talentos dos alunos da nossa escola.",
      local: "Escola Comendador João Rays.",
      horario: "Intervalo."
    },

    {
      nome: "Arraiár da Navar",
      img: "http://www.s2noticias.com.br/arquivos/noticias/4652/9e90d1b6cfa3f77ccd1c93bdfcc88af0.jpg",
      descricao_min: "Se divirta com amigos e se delicie das comidas típicas de um arraiá...",
      descricao_max: "Se divirta com amigos e se delicie das comidas típicas de um arraiá como doces pipoca bolo de fubá e cachorro quente e aprecie nossa fantástica música.",
      local: "Ponte Preta.",
      horario: "Das 19:00 as 23:00."
    }
  ];

  public MostrarEvento(evento){
    this.enviaDados.setDados('evento', evento);
    this.rota.navigate(['/evento']);
  }

}
