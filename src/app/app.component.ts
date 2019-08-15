import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, Subscription } from 'rxjs';//pour les observables (1)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  secondes: number;
  counterSubscription: Subscription;
  constructor(){}
  ngOnInit(){
    // const counter=Observable.interval(1000);
    // this.counterSubscription=counter.subscribe(//subscribe permet d observer une observable
    //   (value: number)=>{
    //     this.secondes=value;
    //   }
    // );
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
