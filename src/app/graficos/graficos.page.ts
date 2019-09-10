import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {

  public trabalhosChart: GoogleChartInterface;
  public avaliadoresChart: GoogleChartInterface;

  constructor(private apiJai: ApiJaiService) { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    this.apiJai.getTrabalhos().subscribe( (trabalhos: Response) => {
      const avaliacoes = trabalhos.values.map(value => value[14]);
      // const avaliadores = trabalhos.values.map(value => value[1]);
      this.trabalhosChart = {
        chartType: 'PieChart',
        dataTable: [
          ['Estado', 'Trabalhos'],
          ['Avaliado', avaliacoes.filter(value => value === 3).length],
          ['Não Avaliado', avaliacoes.filter(value => value === 1).length],
          ['Em Andamento', avaliacoes.filter(value => value === 2).length]
        ],
        options: {
          width: 400,
          colors: ['#32CD32', '#FF0000', '#FFA500']
        }
      };
      this.avaliadoresChart = {
        chartType: 'PieChart',
        dataTable: [
          ['Presença', 'Avaliadores'],
          ['Presente', ],
          ['Ausente', ]
        ]
      };
    });
    /*this.trabalhosChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Estado', 'Trabalhos'],
        ['Avaliado', 1500],
        ['Não Avaliado', 3000],
        ['Em Andamento', 1000]
      ],
      options: {
        width: 400,
        colors: ['#32CD32', '#FF0000', '#FFA500']
      }
    };*/
  }

}

interface Response {
  values: Array<Array<any>>;
}
