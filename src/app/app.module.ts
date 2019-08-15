import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
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
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
const appRoutes: Routes=[
  { path: 'appareils', canActivate: [AuthGuard] ,component: AppareilViewComponent }, //canActivate: [AuthGuard] permet de proteger la route ne pas oublier de le mettre dans les provider le chercher dans les services
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'users', component: UserListComponent},
  { path: 'new-user', component: NewUserComponent },

  { path: 'not-found', component:FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'} //toujour le mettre à la fin angular cherche les route dans l'ordre
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent, //je l ai importé en haut
    AppareilComponent, AuthComponent, AppareilViewComponent, SingleAppareilComponent, FourOhFourComponent, EditAppareilComponent, UserListComponent, NewUserComponent   //je l ai importé en haut
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,//a ajouter
    RouterModule.forRoot(appRoutes) //pour les routes
  ],
  providers: [//y mettre les services
    AppareilService, //je l ai importé en haut
    AuthService, //je l ai importé en haut
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
