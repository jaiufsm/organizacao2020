import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { AvaliadorAusenteModalPage } from '../avaliador-ausente-modal/avaliador-ausente-modal.page';
import { Days } from '../services/days';

@Component({
  selector: 'app-avaliadores-ausentes',
  templateUrl: './avaliadores-ausentes.page.html',
  styleUrls: ['./avaliadores-ausentes.page.scss'],
})
export class AvaliadoresAusentesPage implements OnInit {

  nomesAvaliadores: Array<string> = [];
  public dates: string[] = Days.getDays();
  public locations: string[] = [];
  public trabalhos: any = [];
  public avaliacoes: any = [];
  public avaliadores: any = [];
  public checks: any = [];
  public trabalhosFiltered: any = [];
  public dateModel: string = Days.getCurrentDay();
  public locationModel: string;
  private loading;

  constructor(private apiJai: ApiJaiService, private loadingController: LoadingController, public modalController: ModalController) { }

  ngOnInit() {
    this.presentLoading();
    this.updateTrabalhos();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
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
      this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<string>>) => {
        checks = checks.filter(check => check[2] === this.dateModel);
        this.trabalhosFiltered.map(trabalho => {
          if (this.avaliadores.findIndex(avaliador => avaliador.id === trabalho[1]) === -1
          && checks.findIndex(i => i[0] === trabalho[1]) === -1) {
            this.avaliadores.push({id: trabalho[1], nome: trabalho[0]});
          }
        });
        this.checks = checks;
        this.avaliacoes = avaliacoes;
        this.avaliadores = this.shuffleArray(this.avaliadores);
        if (this.loading) {
          this.loading.dismiss();
        }
      });
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async presentAvaliador(avaliador: Avaliador) {
    const  trabalhosAvaliador = this.trabalhosFiltered.filter(trabalho => trabalho[1] === avaliador.id);
    for (const trabalho of trabalhosAvaliador) {
      const avaliacaoIndex = this.avaliacoes.findIndex(avaliacao => avaliacao[0] === trabalho[2]);
      if (avaliacaoIndex > -1) {
        if (this.avaliacoes[avaliacaoIndex][14] === 'av') {
          trabalho.push('3');
        } else if (this.avaliacoes[avaliacaoIndex][14] === 'aa') {
          trabalho.push('4');
        } else {
          trabalho.push('5');
        }
      } else if  (this.checks.findIndex(check => check[0] === avaliador.id && check[2] === trabalho[7]) > -1) {
        trabalho.push('2');
      } else {
        trabalho.push('1');
      }
    }
    const modal = await this.modalController.create({
      component: AvaliadorAusenteModalPage,
      componentProps: {
        id: avaliador.id,
        nome: avaliador.nome,
        trabalhos: trabalhosAvaliador,
        ausente: true
      }
    });
    return await modal.present();
  }

}

interface Avaliador {
  id: string;
  nome: string;
}
