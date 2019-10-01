import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { AvaliadorModalPage } from '../avaliador-modal/avaliador-modal.page';

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
  private loading;
  public dates: string[] = ['22/10/2018', '23/10/2018', '24/10/2018', '25/10/2018', '26/10/2018'];
  public locations: string[] = [];
  public dateModel = '22/10/2018';
  public locationModel: string;


  constructor(private apiJai: ApiJaiService, public modalController: ModalController,  public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
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
        this.avaliadores.push({id: trabalho[1], nome: trabalho[0]});
      }
    });
  }

  public clearFilter() {
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
    this.filterAvaliadores();
  }

  updateLists() {
    this.apiJai.getValuesByDay(this.dateModel).then((trabalhos: Array<Array<string>>) => {
      this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<string>>) => {
        this.apiJai.getCheck().then((checks: Array<Array<string>>) => {
          this.locations = trabalhos.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
          this.trabalhos = trabalhos;
          this.avaliacoes = avaliacoes;
          this.checks = checks;
          this.filterAvaliadores();
          if (this.loading) {
            this.loading.dismiss();
          }
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
    const  trabalhosAvaliador = this.trabalhos.filter(trabalho => trabalho[1] === avaliador.id);
    for (const trabalho of trabalhosAvaliador) {
      if (this.avaliacoes.findIndex(avaliacao => avaliacao[0] === trabalho[2]) > -1) {
        trabalho.push('3');
      } else if  (this.checks.findIndex(check => check[0] === avaliador.id && check[2] === trabalho[7]) > -1) {
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
        trabalhos: trabalhosAvaliador
      }
    });
    return await modal.present();
  }

}

interface Avaliador {
  id: string;
  nome: string;
}
