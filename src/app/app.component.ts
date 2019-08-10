import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon titre';
  isAuth=false;
  lastUpdate=new Date();
  appareils=[
    {
      name:"Machine à laver",
      status: "allumer"
    },
    {
      name:"Télévision",
      status: "éteint"
    },
    {
      name:"Ordinateur",
      status: "allumer"
    }
  ];
  
  constructor(private appareilService: AppareilService){// je l'ai mis dans app.module.ts
    setTimeout(
      ()=>{
        this.isAuth=true;
      },4000
    );
  }
  onAllumer(){
    console.log("on allume tout !!");
    alert("on allume");
  }
}
