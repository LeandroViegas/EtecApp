import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassandoDadosService } from '../servicos/passando-dados.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  constructor(private rota: Router, public enviaDados: PassandoDadosService) { }

  public noticias = [
    {
      titulo: "Comunicado aos inscritos do Processo Seletivo de Docentes, Aviso nº 040/04/2019",
      img: "https://2u878v2zya7t3dgei82fads5-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/21119P23T1-Alberto-Ruggieri-1025x570.jpg",
      descricao_min: "Saiu publicado no Diário Oficial (29/05/2019, seção I, págs. 174 e 175) o Edital de deferimento e indeferimento de inscrições, …",
      descricao_max: "Saiu publicado no Diário Oficial (29/05/2019, seção I, págs. 174 e 175) o Edital de deferimento e indeferimento de inscrições, de designação da banca examinadora e convocação para entrega do memorial circunstanciado.<br/>Confiram o Edital de Deferimento, para conhecimento da data e horários de entrega do Memorial Circunstanciado, através do Diário Oficial, no mural da Etec e na página de processos seletivos no site da escola.",
      color: "dark"
    },

    {
      titulo: "Minha história na Etec: Murilo Aranda Baldi (Marketing)",
      img: "http://www.etecbarrabonita.com.br/wp-content/uploads/2019/05/Murilo-Aranda-Baldi-300x225.jpg",
      descricao_min: "Olá meu nome é Murilo Aranda Baldi. O marketing foi tão importante na minha vida que eu costumo dizer que, …",
      descricao_max: "Olá meu nome é Murilo Aranda Baldi.<br/>O marketing foi tão importante na minha vida que eu costumo dizer que, por meio dele, pude desenvolver um lado profissional que eu não conhecia em mim.<br/>Ainda enquanto estava estudando, consegui um emprego de vendedor, e estou nessa área há 5 anos. O curso, aliado à prática, abriu meus olhos para todo um mundo de oportunidades e permitiu o desenvolvimento de qualidades, conhecimentos e técnicas que uso até hoje na minha vida pessoal e profissional.<br/>Na área de marketing, é possível realizar trabalhos no comércio, pensando estratégias e colocando em prática as atividades.<br/>Nos dias de hoje, o marketing é tudo em nossa vida. Temos que saber fazer o nosso próprio marketing, pois assim, cada vez mais as portas se abrirão.",
      color: "tertiary"
    },

    {
      titulo: "Reabertura das Inscrições e Edital de Alteração do Cronograma de Atividades – Aviso nº 040/03/2019",
      img: "https://ifce.edu.br/tabuleirodonorte/noticias/reaberto-prazo-para-solicitacao-de-auxilio-2/sem-titulo-1.png/@@images/image.png",
      descricao_min: "As inscrições para o Processo Seletivo de Docentes, Aviso nº 040/03/2019, serão reabertas e recebidas no período de 03/06/2019 a …",
      descricao_max: "As inscrições para o Processo Seletivo de Docentes, Aviso nº 040/03/2019, serão reabertas e recebidas no período de 03/06/2019 a 17/06/2019, no horário das 08h às 11h, das 14h30min às 16h30min e das 19h às 21h, conforme consta na publicação do D.O.E de 29/05/2019, seção I, pág. 175.",
      color: "dark"
    },

    {
      titulo: "HOMOLOGAÇÃO 040/01/2019",
      img: "https://www.seebfloripa.com.br/tok/wp-content/uploads/2017/09/download.jpg",
      descricao_min: "Aviso nº 040/01/2019 Despacho de Homologação",
      descricao_max: "Aviso nº 040/01/2019 Despacho de Homologação",
      color: "dark"
    },

    {
      titulo: "Parceria Microsoft – Centro Paula Souza (Nota de Atualização)",
      img: "data:image/png;base64,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",
      descricao_min: "Caros alunos e professores, Referente à parceria Microsoft – Centro Paula Souza, gostaríamos de apresentar as seguintes notas de atualização: …",
      descricao_max: "Caros alunos e professores,<br/>Referente à parceria Microsoft – Centro Paula Souza, gostaríamos de apresentar as seguintes notas de atualização:<br/>Loja de Softwares (softwares gratuitos para alunos e professores)<br/>No começo desse ano, a Microsoft implementou alterações na sua loja de Softwares, o que tem gerado algumas dúvidas no acesso. Esclarecemos que seus benefícios de software gratuitos estão disponíveis no portal Azure Dev Tools for Teaching, no endereço https://azureforeducation.microsoft.com/devtools<br/>Leia o documento 2019 Instruções – Azure Dev Tools for Teaching para saber como acessar o portal e os softwares disponíveis para o seu perfil.<br/>E-mail institucional (alunos e professores)<br/>Nenhuma alteração foi realizada nos acessos referentes aos e-mails já existentes.<br/>Sobre a criação de e-mails novos, informamos que esse processo está ocorrendo automaticamente tanto para alunos (quando realiza a matrícula no curso) quanto para professores (quando são contratados pela instituição de ensino).<br/>Caso não saiba ou tenha esquecido seu e-mail ou sua senha, você pode solicitar a redefinição através do nosso site, na página: http://www.etecbarrabonita.com.br/meuemail<br/>Em caso de dúvidas, entre em contato com a coordenação de TI.",
      color: "dark"
    },

    {
      titulo: "Minha história na Etec: Rony Aparecido Piqueira (Informática)",
      img: "http://www.etecbarrabonita.com.br/wp-content/uploads/2019/05/Rony-300x300.jpg",
      descricao_min: "Meu nome é Rony, tenho 34 anos, e atuo na área de TI (Tecnologia da Informação) há pouco mais de …",
      descricao_max: "Meu nome é Rony, tenho 34 anos, e atuo na área de TI (Tecnologia da Informação) há pouco mais de 8 anos. Antes de me aventurar na área de tecnologia, já possuía algumas competências advinda de trabalhos anteriores em empresas do comércio, e obtidos também na área acadêmica com a formação de Técnico em Contabilidade e Bacharel em Administração (ênfase em TI).<br/>O interesse em buscar algo novo aumentava de forma constante, e então, entendi que era necessário desenvolver novos competências, era necessário complementar o conhecimento adquirido na graduação. Por diversas indicações e pelo meu interesse na área de tecnologia, decidi investir no curso Técnico de Informática da ETEC Comendador João Rays.<br/>Com o esforço necessário, a partir de então, consegui grandes conquistas: intercâmbio cultural para estudar Inglês nos Estados Unidos; estágio em uma empresa da área de tecnologia com posterior contratação; e embasamento teórico e prático para iniciação em um mundo novo e cheio de desafios.<br/>Desde então, participei de inúmeros projetos, reuniões, experiências profissionais e novos desafios do conhecimento, adquirindo algumas certificações na área de TI e o título de MBA em Gerenciamento de Projetos. O desafio mais recente novamente está relacionado com a sala de aula, mas agora atuando como professor, e justamente na escola que sou tão grato.<br/>O trabalho feito pela ETEC Comendador João Rays na cidade de Barra Bonita é memorável! Tenho muita gratidão por todos os professores e direção, reconheço nessa unidade todo o interesse no desenvolvimento humano, o qual deve ser premissa de toda instituição de ensino séria, por maior que sejam os desafios enfrentados.",
      color: "tertiary"
    },

    {
      titulo: "Comunicado aos inscritos do Processo Seletivo de Docentes, Aviso nº 040/02/2019",
      img: "https://2u878v2zya7t3dgei82fads5-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/21119P23T1-Alberto-Ruggieri-1025x570.jpg",
      descricao_min: "Saiu publicado no Diário Oficial (29/05/2019, seção I, págs. 175 e 176) o Edital de deferimento e indeferimento de inscrições, …",
      descricao_max: "Saiu publicado no Diário Oficial (29/05/2019, seção I, págs. 175 e 176) o Edital de deferimento e indeferimento de inscrições, de designação da banca examinadora e convocação para entrega do memorial circunstanciado.<br />Confiram o Edital de Deferimento, para conhecimento da data e horários de entrega do Memorial Circunstanciado, através do Diário Oficial, no mural da Etec e na página de processos seletivos no site da escola.",
      color: "dark"
    },


    {
      titulo: "Dúvidas na elaboração do seu TCC?",
      img: "https://i1.wp.com/blog.mettzer.com/wp-content/uploads/2017/12/maxresdefault.jpg?fit=1280%2C720&ssl=1",
      descricao_min: "Confira as normas e  regulamentos para a elaboração do Trabalho de Conclusão de Curso. Regulamento Geral  do TCC Manual do …",
      descricao_max: "Confira as normas e  regulamentos para a elaboração do Trabalho de Conclusão de Curso.<br/>Regulamento Geral  do TCC<br/>      Manual do TCC<br/>Portaria 354 – 25.02.2015<br/>Estes e outros documentos também estão disponíveis em nosso servidor local, em Mural.",
      color: "dark"
    },

    {
      titulo: "Minha história na Etec: Maiara Menezes Lopes (Secretariado)",
      img: "http://www.etecbarrabonita.com.br/wp-content/uploads/2019/05/Maiara-Menezes-Lopes-189x300.jpg",
      descricao_min: "Meu nome é Maiara Menezes Lopes, tenho 27 anos, me formei no ano de 2008 no Curso de Técnico em …",
      descricao_max: "Meu nome é Maiara Menezes Lopes, tenho 27 anos, me formei no ano de 2008 no Curso de Técnico em Secretariado na ETEC Comendador João Rays de Barra Bonita, onde também fiz o curso de Técnico em Administração.<br/>O curso em Técnico em Secretariado me proporcionou algumas oportunidades de trabalho na área e fora dela, pois é um curso que abrange várias áreas administrativas, o que facilita o ingresso ao mercado de trabalho. Os professores que lecionam no curso são excelentes e, além do conhecimento técnico, também tive um grande crescimento pessoal.<br/>      Atualmente, trabalho em uma empresa de grande porte da cidade de Jaú e, embora já tenha me graduado em Administração de Empresa e atualmente esteja cursando especialização em Gestão de Saúde, pretendo continuar na área Secretarial.<br/>Agradeço a todos da ETEC e professores pelo aprendizado e incentivo nas minhas escolhas.",
      color: "tertiary"
    },


    {
      titulo: "Processo Seletivo Simplificado de Docentes",
      img: "http://www.jacundatudodebom.com.br/foto-noticias/2018/11/d01552413a307bc81c9f85949de3.jpg",
      descricao_min: "Estão abertas as inscrições para o Processo Seletivo Simplificado de Docentes, objetivando a formação de cadastro para a contratação temporária …",
      descricao_max: "Estão abertas as inscrições para o Processo Seletivo Simplificado de Docentes, objetivando a formação de cadastro para a contratação temporária de excepcional caráter público, para diversos Componentes Curriculares, no período de 08/05/2019 à 22/05/2019 (exceto aos sábados, domingos, feriados e pontos facultativos) no horário das 08:00 às 11:00, das 14:00 às 16:00 e das 19:00 às 21:00.<br/>Para conhecer as condições para inscrição e as fases do Processo Seletivo, leia os Editais de Abertura:<br/>Edital de Abertura – 040-02-2019<br/>Edital de Abertura – 040-03-2019<br/>Edital de abertura – 040-04-2019<br/>Para mais informações, acesse a página de processos seletivos.",
      color: "dark"
    }
  ];

  public MostraNoticia(noticia) {
    this.enviaDados.setDados('noticia', noticia);
    this.rota.navigate(['/noticia']);
  }
  ngOnInit() {
  }
}



