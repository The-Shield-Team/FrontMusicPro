import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl: string = 'https://musicprosolutions.tech/backend/api/user/'

  constructor(private http: HttpClient,private router:Router) {} 
  postRegister(formatData: any){
    console.log(formatData)
    this.http.post(this.registerUrl,formatData).subscribe(response =>{this.router.navigate(['login']);},error =>{console.log(error)})
  }
}
