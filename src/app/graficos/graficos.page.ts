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
          ['Avaliado', avaliacoes.filter(value => value === true).length],
          ['Não Avaliado', avaliacoes.filter(value => value === false).length]
        ],
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
  }

}

interface Response {
  values: Array<Array<any>>;
}
