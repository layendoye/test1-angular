import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon titre';
  isAuth=false;
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
  
  constructor(){
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
