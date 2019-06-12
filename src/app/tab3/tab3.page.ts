import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassandoDadosService } from '../servicos/passando-dados.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private rota: Router, public enviaDados: PassandoDadosService) { }

  public curso = [{
    nome: 'Ensino Médio',
    tipo: [{
      curso: "Normal",
      turmas: [
        1, 2, 3
      ]
    },
    {
      curso: "Integrado",
      turmas: [
        1, 2, 3
      ]
    }]
  }, {
    nome: 'Ensino Técnico',
    tipo: [{
      curso: "Marketing",
      turmas: [
        3
      ]
    },
    {
      curso: "Secretariado",
      turmas: [
        3
      ]
    },
    {
      curso: "Desenvolvimento de Sistemas",
      turmas: [
        1,2
      ]
    }]
  },

  ];


  public cursos(cursos,position) {
    this.enviaDados.setDados('cursos', cursos);
    this.enviaDados.setDados('positionCurso', position);
    this.rota.navigate(['/cursos']);
  }
  ngOnInit() {
  }
}
