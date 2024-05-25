import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginUser, IUserData } from '../interfaces/register.interface';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterLoginRestService {
  constructor(private http: HttpClient) {}


  public registerUSer(userData: IUserData): Observable<IUserData[]> {
    return this.http.post<IUserData[]>('http://localhost:3000/users', userData)
  }

  public loginUser(userData: ILoginUser): Observable<IUserData[]> {
    return this.http.get<IUserData[]>('http://localhost:3000/users')
  }
}
