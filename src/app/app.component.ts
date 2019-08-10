import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{//pour utiliser les services on implement OnInit
  title = 'Mon titre';
  isAuth=false;
  lastUpdate=new Date();
  
  appareils: any[];//initialiser
  constructor(private appareilService: AppareilService){// je l'ai mis dans app.module.ts
    setTimeout(
      ()=>{
        this.isAuth=true;
      },4000
    );
  }

  ngOnInit(){
    this.appareils=this.appareilService.appareils;//  this.appareils c est celui de  appareils: any[];
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }
}
