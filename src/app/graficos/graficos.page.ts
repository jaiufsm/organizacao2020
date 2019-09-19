import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {

  public trabalhosChart: GoogleChartInterface;
  public avaliadoresChart: GoogleChartInterface;
  public dates: string[] = [];
  public locations: string[] = [];
  public trabalhos: any = [];
  public trabalhosFiltered: any = [];
  public dateModel: string;
  public locationModel: string;
  private loading = null;

  constructor(private apiJai: ApiJaiService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.updateDays();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  private updateDays() {
    this.apiJai.getDays()
      .then((response: Array<string>) => {
        console.log(response);
        if (response) {
          this.dates = response;
          this.dateModel = this.dates[0];
          this.updateTrabalhos();
        }
      }, err => {
        console.log(err);
      });
  }

  public updateTrabalhos() {
    this.apiJai.getValuesByDay(this.dateModel).then((trabalhos: Array<Array<string>>) => {
      this.locations = trabalhos.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.trabalhos = trabalhos;
      this.filterTrabalhos();
    });
  }

  public filterTrabalhos() {
    this.trabalhosFiltered = [...this.trabalhos];
    if (this.locationModel) {
      this.trabalhosFiltered = this.trabalhosFiltered.filter((value) => {
        return value[9] === this.locationModel;
      });
    }
    this.loadChart();
  }

  public clearFilter() {
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
  }

  loadChart() {
    this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<string>>) => {
      this.apiJai.getCheck().then((checks: Array<Array<string>>) => {
        let avaliados = 0;
        let naoAvaliados = 0;
        let emAndamento = 0;
        this.trabalhosFiltered.map(trabalho => {
          if (avaliacoes.findIndex(avaliacao => avaliacao[0] === trabalho[2]) > -1) {
            avaliados += 1;
          } else if (checks.findIndex(check => check[0] === trabalho[1]) > -1) {
            emAndamento += 1;
          } else {
            naoAvaliados += 1;
          }
        });
        this.trabalhosChart = {
          chartType: 'PieChart',
          dataTable: [
            ['Estado', 'Trabalhos'],
            ['Avaliado', avaliados],
            ['Não Avaliado', naoAvaliados],
            ['Em Andamento', emAndamento]
          ],
          options: {
            width: 380,
            colors: ['#32CD32', '#FF0000', '#FFA500']
          }
        };
        const avaliadores = this.trabalhosFiltered
          .map(trabalho => trabalho[1])
          .filter((value, index, self) => self.indexOf(value) === index);
        const avaliadoresPresentes = checks
          .filter((value, index, self) => value[2] === this.dateModel && self.findIndex(i => i[2] === value[2]) > -1)
          .map(check => check[0])
          .filter((value, index, self) => self.indexOf(value) === index);
        const totalAvaliadores = avaliadores.length;
        let totalAvaliadoresPresentes = 0;
        console.log(avaliadores);
        console.log('avaliadores presentes' + avaliadoresPresentes);
        avaliadoresPresentes.map(avaliador => {
          if (avaliadores.indexOf(avaliador) > -1) {
            totalAvaliadoresPresentes += 1;
          }
        });
        this.avaliadoresChart = {
          chartType: 'PieChart',
          dataTable: [
            ['Check-in', 'Avaliadores'],
            ['Efetuado', totalAvaliadoresPresentes],
            ['Não Efetuado', totalAvaliadores - totalAvaliadoresPresentes]
          ],
          options: {
            width: 380,
            colors: ['#32CD32', '#FF0000']
          }
        };
        if (this.loading) {
          this.loading.dismiss();
        }
      });
    });
    /* this.apiJai.getTrabalhos().subscribe( (trabalhos: Response) => {
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
     });*/
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

interface GetDaysResponse {
  values: Array<string>;
}

interface GetValuesByDayResponse {
  values: Array<Array<string>>;
}
