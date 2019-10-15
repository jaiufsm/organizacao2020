import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { LoadingController } from '@ionic/angular';
import { Days } from '../services/days';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.page.html',
  styleUrls: ['./trabalho.page.scss'],
})
export class TrabalhoPage implements OnInit {

  trabalhos: Array<Array<string>>;
  trabalhosFiltered: Array<Array<string>>;
  public dates: string[] = Days.getDays();
  public locations: string[] = [];
  public dateModel = Days.getCurrentDay();
  public locationModel: string;
  private loading;

  constructor(public apiJai: ApiJaiService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.updateTrabalhos();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  public filterTrabalhos() {
    this.trabalhosFiltered = [...this.trabalhos];
    if (this.locationModel) {
      this.trabalhosFiltered = this.trabalhosFiltered.filter((value) => {
        return value[9] === this.locationModel;
      });
    }
  }

  public clearFilter() {
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
  }

  updateTrabalhos() {
    this.presentLoading();
    this.apiJai.getValuesByDay(this.dateModel).then((trabalhos: Array<Array<string>>) => {
      this.locations = trabalhos.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<any>>) => {
        this.apiJai.getCheck().then((checks: Array<Array<any>>) => {
          for (const trabalho of trabalhos) {
            const avaliacaoIndex = avaliacoes.findIndex(avaliacao => avaliacao[0] === trabalho[2]);
            if (avaliacaoIndex > -1) {
              if (avaliacoes[avaliacaoIndex][14] === 'av') {
                trabalho.push('3');
              } else if (avaliacoes[avaliacaoIndex][14] === 'aa') {
                trabalho.push('4');
              } else {
                trabalho.push('5');
              }
            } else if  (checks.findIndex(check => check[0] === trabalho[1] && check[2] === trabalho[7]) > -1) {
              trabalho.push('2');
            } else {
              trabalho.push('1');
            }
          }
          this.trabalhos = trabalhos;
          const locationIndex = this.locations.findIndex(location => location === 'Centro de Convenções');
          if (locationIndex > -1) {
            this.locationModel = this.locations[locationIndex];
          }
          this.filterTrabalhos();
          if (this.loading) {
            this.loading.dismiss();
          }
        }).catch(error => {
          console.log(error);
          if (this.loading) {
            this.loading.dismiss();
          }
        });
      });
    });
  }

  getItems(ev: any) {
    const searchValue = ev.target.value.toLowerCase();
    this.trabalhosFiltered = this.trabalhos.filter(trabalho => {
      const idTrabalho = String(trabalho[2]);
      const apresentador: string = trabalho[4];
      return idTrabalho.includes(searchValue) || apresentador.toLowerCase().includes(searchValue);
    });
  }

}
