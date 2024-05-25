import { Injectable } from '@angular/core';
import { IUserData } from '../../interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public logedUser: IUserData | null = null;
  public allUsers: IUserData[] = [];
 
  public get isUserLoged(): boolean {
    return !!this.logedUser;
  }
}
