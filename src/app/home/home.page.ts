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
    this.updateDays();
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
    this.apiJai.getValuesByDay(this.dateModel)
    .then((response: Array<Array<string>>) => {
      console.log(response);
      // let trabalhosResponse;
      this.locations = response.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.apiJai.getAvaliacoes().then((avaliacoes: Array<Array<string>>) => {
        console.log(avaliacoes);
        console.log(response);
        this.trabalhos = [];
        for (const trabalho of response) {
          if (avaliacoes.filter(avaliacao => avaliacao[0] === trabalho[2]).length > 0) {
            trabalho.push('3');
          } else {
            trabalho.push('1');
          }
          this.trabalhos.push(trabalho);
        }
        console.log(this.trabalhos);
        this.filterTrabalhos();
      });
    });
  }

 /* public updateTrabalhos() {
    this.apiJai.getDays()
    .subscribe((response: GetDaysResponse) => {
      console.log(response);
      if (response) {
      this.dates = response.values;
      // this.dates = response.values.map(value => value[7]).filter((value, index, self) => self.indexOf(value) === index).sort();
      // this.locations = response.values.map(value => value[9]).filter((value, index, self) => self.indexOf(value) === index).sort();
      this.filterTrabalhos();
      }
    }, err => {
      console.log(err);
    });
  }*/

  /*public filterTrabalhos() {
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
  }*/

  public filterTrabalhos() {
    this.trabalhosFiltered = [...this.trabalhos];
    if (this.locationModel) {
      this.trabalhosFiltered = this.trabalhosFiltered.filter((value) => {
        return value[9]  === this.locationModel;
      });
    }
  }

  public clearFilter() {
    this.locationModel = null;
    this.trabalhosFiltered = [...this.trabalhos];
  }

}
