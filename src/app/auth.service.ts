import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

export class AuthService {
  private isAuthenticated: boolean = true;

  getIsAuth() {
    return this.isAuthenticated;
  }
}
