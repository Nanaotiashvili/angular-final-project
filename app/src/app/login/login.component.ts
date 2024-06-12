import { Component } from '@angular/core';
import { RegisterLoginRestService } from '../services/register-login.rest.service';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [RegisterLoginRestService]
})
export class LoginComponent {

  constructor(private loginServ: RegisterLoginRestService, private router: Router){}
  
    public userForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    
  
    public login() {
      const userData = {
        email: this.userForm.get('email')?.value as string,
        password: this.userForm.get('password')?.value as string
      }
  
      this.loginServ.loginUser(userData).pipe(
        tap(users => {
          const loggedUser = users.find((user) => user.email === userData.email && user.password === userData.password)
          if (loggedUser) {
            alert('user logged')
            this.router.navigateByUrl('/main')
          }
          else {
            console.log('User not found')
          }
        }),
        catchError((err) => {
          console.log('Error catched')
          return of(null)
        })
      ).subscribe()
    }
  }
  


