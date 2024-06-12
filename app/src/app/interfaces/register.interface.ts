export interface IUserData {
    id?: string;
    firstName: string;
    lastName: string;
    city: string;
    phone: string;
    email: string;
    password: string;
  }

  export interface ILoginUser {
    email: string;
    password: string;
  }