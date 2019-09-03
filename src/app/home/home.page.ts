import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public dates: string[] = [];
  public locations: string[] = [];
  public trabalhos: any = [];
  public trabalhosFiltered: any = [];
  public dateModel: string;
  public locationModel: string;

  constructor(private apiJai: ApiJaiService) {}

  ngOnInit() {/*
    this.trabalhos.push(
      {
        titulo: 'trabalho a',
        apresentador: 'apresentador 1',
        avaliador: 'avaliador alfa',
        dia: '01/10/2019',
        horario: '13:30 / 15:00',
        predio: 'Centro de convenções',
        sala: ''
      }
    );
    this.trabalhosFiltered = [...this.trabalhos];*/
    this.updateTrabalhos();
  }

  public updateTrabalhos() {
    this.apiJai.getTrabalhos()
    .subscribe((response: Response) => {
      console.log(response);
      if (response) {
      this.trabalhos = response.values;
      this.dates = response.values.map(value => value[7]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.locations = response.values.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.filterTrabalhos();
      }
    }, err => {
      console.log(err);
    });
  }

  public filterTrabalhos() {
    this.trabalhosFiltered = [...this.trabalhos];
    if (this.dateModel || this.locationModel) {
      this.trabalhosFiltered = this.trabalhosFiltered.filter((value) => {
        if (this.dateModel && this.locationModel) {
          return value[7] === this.dateModel && value[9] === this.locationModel;
        }
        if (this.dateModel) {
          return value[7] === this.dateModel;
        }
        if (this.locationModel) {
          return value[9] === this.locationModel;
        }
      });
    }
  }

  public clearFilter() {
    this.dateModel = null;
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
  }

}


interface Trabalho {
  titulo: string;
  apresentador: string;
  avaliador: string;
  dia: string;
  horario: string;
  predio: string;
  sala: string;
}

interface Response {
  values: Array<Array<string>>;
}
