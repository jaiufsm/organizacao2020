import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { AvaliadorModalPage } from '../avaliador-modal/avaliador-modal.page';
import { Days } from '../services/days';

@Component({
  selector: 'app-avaliador',
  templateUrl: './avaliador.page.html',
  styleUrls: ['./avaliador.page.scss'],
})
export class AvaliadorPage implements OnInit {

  trabalhos: Array<Array<string>> = [];
  trabalhosFiltered: Array<Array<string>> = [];
  avaliadores: Array<Avaliador> = [];
  avaliadoresFiltered: Array<Avaliador> = [];
  avaliacoes: Array<Array<string>> = [];
  checks: Array<Array<string>> = [];
  loginAvaliadores: any = [];
  private loading;
  public dates: string[] = Days.getDays();
  public locations: string[] = [];
  public dateModel = Days.getCurrentDay();
  public locationModel: string;


  constructor(
    public apiJai: ApiJaiService,
    public modalController: ModalController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.updateLists();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  public filterAvaliadores() {
    this.trabalhosFiltered = [...this.trabalhos];
    if (this.locationModel) {
      this.trabalhosFiltered = this.trabalhosFiltered.filter((value) => {
        return value[9] === this.locationModel;
      });
    }
    this.avaliadores = [];
    this.trabalhosFiltered.map(trabalho => {
      if (this.avaliadores.findIndex(avaliador => avaliador.id === trabalho[1]) === -1) {
        const senha = this.loginAvaliadores.filter(login => login[0] === trabalho[1]);
        this.avaliadores.push({ id: trabalho[1], nome: trabalho[0], senha: senha[0][1] });
      }
    });
    this.avaliadoresFiltered = [...this.avaliadores];
  }

  public clearFilter() {
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
    this.filterAvaliadores();
  }

  updateLists() {
    this.presentLoading();
    this.apiJai.getValuesByDay(this.dateModel).then((trabalhos: Array<Array<string>>) => {
      this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<string>>) => {
        this.apiJai.getCheck().then((checks: Array<Array<string>>) => {
          this.apiJai.getLoginAvaliador().then((loginAvaliador: Array<Array<string>>) => {
            this.locations = trabalhos.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
            this.trabalhos = trabalhos;
            this.avaliacoes = avaliacoes;
            this.checks = checks;
            this.loginAvaliadores = loginAvaliador;
            const locationIndex = this.locations.findIndex(location => location === 'Centro de Convenções');
            if (locationIndex > -1) {
              this.locationModel = this.locations[locationIndex];
            }
            this.filterAvaliadores();
            if (this.loading) {
              this.loading.dismiss();
            }
          });
        });
      });
    });
  }

  getItems(ev: any) {
    const searchValue = ev.target.value.toLowerCase();
    this.avaliadoresFiltered = this.avaliadores.filter(avaliador => {
      return avaliador.nome.toLowerCase().includes(searchValue);
    });
  }

  async presentAvaliador(avaliador: Avaliador) {
    const trabalhosAvaliador = this.trabalhos.filter(trabalho => trabalho[1] === avaliador.id);
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
      } else if (this.checks.findIndex(check => check[0] === avaliador.id && check[2] === trabalho[7]) > -1) {
        trabalho.push('2');
      } else {
        trabalho.push('1');
      }
    }
    const modal = await this.modalController.create({
      component: AvaliadorModalPage,
      componentProps: {
        id: avaliador.id,
        nome: avaliador.nome,
        senha: avaliador.senha,
        trabalhos: trabalhosAvaliador
      }
    });
    return await modal.present();
  }

}

interface Avaliador {
  id: string;
  nome: string;
  senha: string;
}
