import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

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
  appareilSubscription: Subscription;
  
  constructor(private appareilService: AppareilService){// je l'ai mis dans app.module.ts
    setTimeout(
      ()=>{
        this.isAuth=true;
      },4000
    );
  }

  ngOnInit(){
    this.appareilSubscription=this.appareilService.appareilSubject.subscribe(//Pour rappel:appareilSubject est un subject qui emmettra la liste des appareils lorsqu on lui demandera....la methode subscribe()
      (appareils: any[])=>{//un tableau sera retourné
        this.appareils=appareils;
      }
    );
    this.appareilService.emitAppareilSubject();//on fait emmettre la copy des appareils
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
