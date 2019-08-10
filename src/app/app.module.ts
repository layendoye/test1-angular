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

const appRoutes: Routes=[
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent, //je l ai importé en haut
    AppareilComponent, AuthComponent, AppareilViewComponent   //je l ai importé en haut
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //pour les routes
  ],
  providers: [
    AppareilService, //je l ai importé en haut
    AuthService //je l ai importé en haut
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
