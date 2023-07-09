import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressServiceService } from '../services/address-service.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  registerForm!: FormGroup;

  regionOption: any[] = [];
  comunaOptions: any[] = [];
  
  constructor(private fb: FormBuilder, private addressService: AddressServiceService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      nameuser: ['', [Validators.required]],
      lastnameuser: ['', [Validators.required]],
      rut:['',[Validators.required]],
      region:['',[Validators.required]],
      comuna:['',[Validators.required]],
      address:['',[Validators.required]],
      addressnumber:['',[Validators.required]],
      moreinfo:[''],
    }, { validator: this.checkPasswords });
    this.loadRegionOptions();
  }

  checkPasswords(group: FormGroup) {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      return password === confirmPassword ? null : { notSame: true };
    } 
  
    return null;
  }

  loadRegionOptions() {
    this.addressService.getRegiones().subscribe(
      (regiones: any[]) => {
        this.regionOption = regiones;
      })
  }

  onRegionChange() {
    const regionId = this.registerForm.value.region;

    if (regionId) {
      this.addressService.getComunas(regionId).subscribe(
        (comunas: any[]) => {
          this.comunaOptions = comunas;
        }
      );
    } else {
      this.comunaOptions = [];
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get nameuser() {
    return this.registerForm.get('nameuser');
  }
  get lastnameuser() {
    return this.registerForm.get('lastnameuser');
  }
  get rut() {
    return this.registerForm.get('rut');
  }
  get region() {
    return this.registerForm.get('region');
  }
  get comuna() {
    return this.registerForm.get('comuna');
  }
  get address() {
    return this.registerForm.get('address');
  }
  get addressnumber() {
    return this.registerForm.get('addressnumber');
  }
  get moreinfo() {
    return this.registerForm.get('moreinfo');
  }

  login() {
    if (this.registerForm.valid) {
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}

