import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'form-field-appearance-example',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
 /*  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule], */
})
export class UserCreateComponent{
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get email() {
    return this.registerForm.controls.email;
  }
  get password() {
    return this.registerForm.controls.password;
  }
  register() {
    if (this.registerForm.valid) {
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}


