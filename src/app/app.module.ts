import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component'; //j ai créé le component mon-premier
import { AppareilComponent } from './appareil/appareil.component'; //j ai créé le component appareil
import { AppareilService } from './services/appareil.service'; //j ai créé un dossier service
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
const appRoutes: Routes=[
  { path: 'appareils', canActivate: [AuthGuard] ,component: AppareilViewComponent }, //canActivate: [AuthGuard] permet de proteger la route ne pas oublier de le mettre dans les provider le chercher dans les services
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },

  { path: 'not-found', component:FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'} //toujour le mettre à la fin angular cherche les route dans l'ordre
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent, //je l ai importé en haut
    AppareilComponent, AuthComponent, AppareilViewComponent, SingleAppareilComponent, FourOhFourComponent   //je l ai importé en haut
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //pour les routes
  ],
  providers: [//y mettre les services
    AppareilService, //je l ai importé en haut
    AuthService, //je l ai importé en haut
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
