import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component'; //j ai créé le component mon-premier
import { AppareilComponent } from './appareil/appareil.component'; //j ai créé le component appareil
import { AppareilService } from './services/appareil.service'; //j ai créé un dossier service
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent, //je l ai importé en haut
    AppareilComponent   //je l ai importé en haut
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppareilService //je l ai importé en haut
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
