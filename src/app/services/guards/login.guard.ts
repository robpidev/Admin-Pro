import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    public userService: UserService,
    public router: Router
  ){

  }

  canActivate() {

    if(this.userService.stateLoged()){
      console.log('Esta logeado');
      return true;
    }else{
      console.log('bloqueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}