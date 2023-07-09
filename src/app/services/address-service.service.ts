import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressServiceService {
  constructor(private http: HttpClient) {}

  getComunas(id: number): Observable<any[]> {
    const sectionURL =
      'https://musicprosolutions.tech/backend/api/comuna/?region=';
    console.log(sectionURL + id + '/')
    return this.http.get<any[]>(sectionURL + id);
  }

  getRegiones(): Observable<any[]> {
    const sectionURL =
    'https://musicprosolutions.tech/backend/api/region/';

    return this.http.get<any[]>(sectionURL);
  }
}
