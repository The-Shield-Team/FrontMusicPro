import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl: string = 'https://musicprosolutions.tech/backend/api/user/'

  constructor(private http: HttpClient) {} 
  postRegister(formatData: any){
    console.log(formatData)
    this.http.post(this.registerUrl,formatData).subscribe(response =>{console.log (response);},error =>{console.log(error)})
  }
}
