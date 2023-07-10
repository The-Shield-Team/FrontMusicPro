import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressServiceService } from '../services/address-service.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  registerForm!: FormGroup;

  storeOption: any[] = [];
  G:string='G';
  S:string='S';
  employeeType:string = '';
  
  constructor(private fb: FormBuilder, private addressService: AddressServiceService, private register: RegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      nameuser: ['', [Validators.required]],
      lastnameuser: ['', [Validators.required]],
      rut:['',[Validators.required]],
      store:['',[Validators.required]],
      employee:['',[Validators.required]],

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
    this.addressService.getStore().subscribe(
      (store: any[]) => {
        this.storeOption = store;
      })
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
  get store() {
    return this.registerForm.get('store');
  }

  get employee() {
    return this.registerForm.get('employee')
  }



  submitForm() {
    const formValues = this.registerForm.value;
    if (formValues.employee === 'G'){
      const requestData = {
        "username": formValues.email,
        "rut": formValues.rut,
        "email": formValues.email,
        "password": formValues.password,
        "type_user": formValues.employee,
        "name_user": formValues.nameuser,
        "last_name_user": formValues.lastnameuser,
        "grocer": {
          "store": formValues.store}
    };this.register.postRegister(requestData)
    }
    else{
      const requestData = {
        "username": formValues.email,
        "rut": formValues.rut,
        "email": formValues.email,
        "password": formValues.password,
        "type_user": formValues.employee,
        "name_user": formValues.nameuser,
        "last_name_user": formValues.lastnameuser,
        "salesman": {
          "store": formValues.store}
    };this.register.postRegister(requestData)
    }}

}

