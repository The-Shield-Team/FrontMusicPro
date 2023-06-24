import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencytransformService {

  private url = 'https://mindicador.cl/api/dolar/'

  constructor(private http: HttpClient) { }

  getDolarValues() {
    return this.http.get<any>(this.url);
  }
}
