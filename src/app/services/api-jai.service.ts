import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiJaiService {

  apiUrl = 'https://script.google.com/macros/s/AKfycbzdEAUndj-OtgytCTu59HZn2xOefjB9kOTEHjTDms6UQ8hpLX0/exec';
  daysList: Array<string> = [];
  trabalhosList: Array<ListaTrabalhos> = [];
  avaliacoesList: Array<Avaliacao> = [];
  checkList: Array<Array<string>> = [];

  constructor(public http: HttpClient, private router: Router) {  }

  /*public getTrabalhos() {
    return this.http.get('https://script.google.com/macros/s/AKfycbxpJbyxvF35U08UFWRmZAGXCMrrGBLd3sl130pHZu3f5CqwjjMw/exec');
  }*/

  public getDays() {
    const body = {
      type: 'getDays'
    };
    const daysPromise = new Promise((resolve, reject) => {
      if (this.daysList.length > 0) {
        resolve(this.daysList);
      } else {
        const params = new URLSearchParams();
        params.append('type', 'getDays');
        const token = localStorage.getItem('token');
        if (token != null) {
          params.append('token', token);
        }
        fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
          response.json().then(jsonResponse => {
            this.daysList = jsonResponse.values;
            // console.log(this.daysList);
            resolve(this.daysList);
          });
        }, err => {
          reject(err);
        });
      }
    });
    return daysPromise;
  }

  public getValuesByDay(day: string) {
    const body = {
      type: 'getValuesByDay',
      day
    };
    const trabalhosPromise = new Promise((resolve, reject) => {
      const trabalhosListFiltered = this.trabalhosList.filter(trabalho  => trabalho.dia === day);
      if (trabalhosListFiltered.length > 0) {
        resolve(trabalhosListFiltered.pop().trabalhos);
      } else {
        const params = new URLSearchParams();
        params.append('type', 'getValuesByDay');
        params.append('day', day);
        const token = localStorage.getItem('token');
        if (token != null) {
          params.append('token', token);
        }
        fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
          response.json().then(jsonResponse => {
            const trabalhoList: ListaTrabalhos = {
              dia: day,
              trabalhos: jsonResponse.values
            };
            this.trabalhosList.push(trabalhoList);
            resolve(trabalhoList.trabalhos);
          });
        }, err => {
          reject(err);
        });
      }
    });
    return trabalhosPromise;
  }

  public getCheck() {
    const body = {
      type: 'getCheck'
    };
    const checkPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getCheck');
      const token = localStorage.getItem('token');
      if (token != null) {
        params.append('token', token);
      }
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          this.checkList = jsonResponse.values;
          // console.log(this.checkList);
          resolve(this.checkList);
        });
      }, err => {
        reject(err);
      });
    });
    return checkPromise;
  }

  public setCheck(idAvaliador: string, nomeAvaliador: string, dia: string, hora: string, checkType: string) {
    const body = {
      type: 'setCheck',
      idAvaliador,
      nomeAvaliador,
      dia,
      hora,
      checkType
    };
    const checkPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'setCheck');
      params.append('idAvaliador', idAvaliador);
      params.append('nomeAvaliador', nomeAvaliador);
      params.append('dia', dia);
      params.append('hora', hora);
      params.append('checkType', checkType);
      const token = localStorage.getItem('token');
      if (token != null) {
        params.append('token', token);
      }
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          this.checkList = jsonResponse.values;
          // console.log(this.checkList);
          resolve(this.checkList);
        });
      }, err => {
        reject(err);
      });
    });
    return checkPromise;
  }

  public getAvaliacoes() {
    const body = {
      type: 'getAvaliacoes'
    };
    const avaliacoesPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getAvaliacoes');
      const token = localStorage.getItem('token');
      if (token != null) {
        params.append('token', token);
      }
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          this.avaliacoesList = jsonResponse.values;
          // console.log(this.avaliacoesList);
          resolve(this.avaliacoesList);
        });
      }, err => {
        reject(err);
      });
    });
    return avaliacoesPromise;
  }

  public getTrabalhos()  {
    const trabalhosPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getTrabalhos');
      const token = localStorage.getItem('token');
      if (token != null) {
        params.append('token', token);
      }
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          resolve(jsonResponse.values);
        });
      }, err => {
        reject(err);
      });
    });
    return trabalhosPromise;
  }

  public doLogin(login: string, password: string) {
    const loginPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'doLogin');
      params.append('login', login);
      params.append('password', password);
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          const token = jsonResponse.token;
          localStorage.setItem('token', token);
          resolve(jsonResponse);
        });
      }, err => {
        reject(err);
      });
    });
    return loginPromise;
  }

  public doLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public getLoginAvaliador() {
    const loginAvaliadorPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getLoginAvaliador');
      const token = localStorage.getItem('token');
      if (token != null) {
        params.append('token', token);
      }
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          resolve(jsonResponse.values);
        });
      }, err => {
        reject(err);
      });
    });
    return loginAvaliadorPromise;
  }

}

interface GetDaysResponse {
  values: Array<string>;
}

interface GetTrabalhosResponse {
  values: Array<Array<string>>;
}

interface ListaTrabalhos {
  dia: string;
  trabalhos: Array<Array<string>>;
}

export interface Trabalho {
  titulo: string;
  apresentador: string;
  avaliador: string;
  dia: string;
  horario: string;
  predio: string;
  sala: string;
}

export interface Avaliacao {
  idTrabalho: string;
  nomeTrabalho: string;
  avaliadorOriginal: string;
  avaliadorReal: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
}
