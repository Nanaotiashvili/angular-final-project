import { Component } from '@angular/core';
import { RegisterLoginRestService } from '../services/register-login.rest.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [RegisterLoginRestService]
})
export class RegisterComponent {
  constructor(private registerServ: RegisterLoginRestService){}

  public userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    city: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    passwordGroup: new FormGroup({
      password: new FormControl(),
      confirmPassword: new FormControl()
    })
  })

  public register() {
    const userData = {
      firstName: this.userForm.get('firstName')?.value as string,
      lastName: this.userForm.get('lastName')?.value as string,
      city: this.userForm.get('city')?.value as string,
      phone: this.userForm.get('phone')?.value as string,
      email: this.userForm.get('email')?.value as string,
      password: this.userForm.get('passwordGroup')?.get('password')?.value as string
    }

    this.registerServ.registerUSer(userData).subscribe();
  }
}
