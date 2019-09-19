import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-avaliadores-ausentes',
  templateUrl: './avaliadores-ausentes.page.html',
  styleUrls: ['./avaliadores-ausentes.page.scss'],
})
export class AvaliadoresAusentesPage implements OnInit {

  avaliadores: Array<string> = [];
  public dates: string[] = [];
  public locations: string[] = [];
  public trabalhos: any = [];
  public trabalhosFiltered: any = [];
  public dateModel: string;
  public locationModel: string;
  private loading;

  constructor(private apiJai: ApiJaiService, private loadingController: LoadingController) { }

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
    this.updateAvaliadores();
  }

  public clearFilter() {
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
  }


  updateAvaliadores() {
    this.apiJai.getCheck().then((checks: Array<Array<string>>) => {
      checks = checks.filter(check => check[2] === this.dateModel);
      const listaAvaliadores = this.trabalhosFiltered
        .filter(trabalho => checks.findIndex(i => i[0] === trabalho[1]) === -1)
        .map(trabalho => trabalho[0])
        .filter((value, index, self) => self.indexOf(value) === index);
      this.avaliadores = this.shuffleArray(listaAvaliadores);
      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

}
