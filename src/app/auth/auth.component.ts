import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authStatus=this.authService.isAuth;
  }
  onSignIn(){
    this.authService.singIn().then(
      ()=>{
        alert('Connexion réussie');
        this.authStatus= this.authService.isAuth;
      }
    );//then pour attendre la fin car c est une methode asynchrone
  }

  onSignOUT(){
    this.authService.singOut(); 
    this.authStatus= this.authService.isAuth;
  }

}
