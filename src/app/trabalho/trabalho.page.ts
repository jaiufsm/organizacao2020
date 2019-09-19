import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.page.html',
  styleUrls: ['./trabalho.page.scss'],
})
export class TrabalhoPage implements OnInit {

  trabalhos: Array<Array<string>>;
  trabalhosFiltered: Array<Array<string>>;
  private loading;

  constructor(private apiJai: ApiJaiService, private loadingController: LoadingController) { }

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

  updateTrabalhos() {
    this.apiJai.getTrabalhos().then((trabalhos: Array<Array<string>>) => {
      this.trabalhos = trabalhos;
      this.trabalhosFiltered = trabalhos;
      if (this.loading) {
        this.loading.dismiss();
      }
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
