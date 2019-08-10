import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
