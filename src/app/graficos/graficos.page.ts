import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { LoadingController } from '@ionic/angular';
import { Days } from '../services/days';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {

  public trabalhosChart: GoogleChartInterface;
  public avaliadoresChart: GoogleChartInterface;
  public dates: string[] = Days.getDays();
  public locations: string[] = [];
  public trabalhos: any = [];
  public trabalhosFiltered: any = [];
  public dateModel: string = Days.getCurrentDay();
  public locationModel: string;
  private loading = null;

  constructor(private apiJai: ApiJaiService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.updateTrabalhos();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  public updateTrabalhos() {
    this.presentLoading();
    this.apiJai.getValuesByDay(this.dateModel).then((trabalhos: Array<Array<string>>) => {
      this.locations = trabalhos.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.trabalhos = trabalhos;
      const locationIndex = this.locations.findIndex(location => location === 'Centro de Convenções');
      if (locationIndex > -1) {
        this.locationModel = this.locations[locationIndex];
      }
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
        const avaliadoresSubstitutos = checks
          .filter((value, index, self) => value[2] === this.dateModel
            && value[4] === 'in-sub'
            && self.findIndex(i => i[2] === value[2]) > -1)
          .map(check => check[0])
          .filter((value, index, self) => self.indexOf(value) === index);
        const totalAvaliadores = avaliadores.length;
        const totalAvaliadoresSubstitutos = avaliadoresSubstitutos.length;
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
            ['Efetuado', totalAvaliadoresPresentes - totalAvaliadoresSubstitutos],
            ['Efetuado - Substituto', totalAvaliadoresSubstitutos],
            ['Não Efetuado', totalAvaliadores - totalAvaliadoresPresentes]
          ],
          options: {
            width: 380,
            colors: ['#32CD32', '#033DFC', '#FF0000']
          }
        };
        if (this.loading) {
          this.loading.dismiss();
        }
      });
    });
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
