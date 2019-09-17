import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { ModalController } from '@ionic/angular';
import { AvaliadorModalPage } from '../avaliador-modal/avaliador-modal.page';

@Component({
  selector: 'app-avaliador',
  templateUrl: './avaliador.page.html',
  styleUrls: ['./avaliador.page.scss'],
})
export class AvaliadorPage implements OnInit {

  trabalhos: Array<Array<string>> = [];
  avaliadores: Array<Avaliador> = [];
  avaliadoresFiltered: Array<Avaliador> = [];
  avaliacoes: Array<Array<string>> = [];
  checks: Array<Array<string>> = [];

  constructor(private apiJai: ApiJaiService, public modalController: ModalController) { }

  ngOnInit() {
    this.updateLists();
  }

  updateLists() {
    this.apiJai.getTrabalhos().then((trabalhos: Array<Array<string>>) => {
      this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<string>>) => {
        this.apiJai.getCheck().then((checks: Array<Array<string>>) => {
          this.trabalhos = trabalhos;
          this.avaliacoes = avaliacoes;
          trabalhos.map(trabalho => {
            if (this.avaliadores.findIndex(avaliador => avaliador.id === trabalho[1]) === -1) {
              this.avaliadores.push({id: trabalho[1], nome: trabalho[0]});
            }
          });
          this.avaliadoresFiltered = this.avaliadores;
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

  /*
  async presentAvaliador(avaliador: Avaliador) {
    const modal = await this.modalController.create({
      component: AvaliadorModalPage,
      componentProps: {
        id: avaliador.id,
        nome: avaliador.nome,
        trabalhos: []
      }
    });
    return await modal.present();
  }*/

}

interface Avaliador {
  id: string;
  nome: string;
}
