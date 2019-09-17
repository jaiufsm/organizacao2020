import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.page.html',
  styleUrls: ['./trabalho.page.scss'],
})
export class TrabalhoPage implements OnInit {

  trabalhos: Array<Array<string>>;
  trabalhosFiltered: Array<Array<string>>;

  constructor(private apiJai: ApiJaiService) { }

  ngOnInit() {
    this.updateTrabalhos();
  }

  updateTrabalhos() {
    this.apiJai.getTrabalhos().then((trabalhos: Array<Array<string>>) => {
      this.trabalhos = trabalhos;
      this.trabalhosFiltered = trabalhos;
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
