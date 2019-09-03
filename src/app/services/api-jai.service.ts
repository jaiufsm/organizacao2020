import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiJaiService {

  constructor(public http: HttpClient) {  }

  public getTrabalhos() {
    return this.http.get('https://script.google.com/macros/s/AKfycbxpJbyxvF35U08UFWRmZAGXCMrrGBLd3sl130pHZu3f5CqwjjMw/exec');
  }
}
