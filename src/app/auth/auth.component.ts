import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    authStatus=this.authService.isAuth;
  }
  onSignIn(){
    this.authService.signIn().then(
      ()=>{
        alert('Connexion réussie');
        this.authStatus= this.authService.isAuth;
      }
    );//then pour attendre la fin car c est une methode asynchrone
  }

  onSignOUT(){
    this.authService.signOut(); 
    this.authStatus= this.authService.isAuth;
  }

}
