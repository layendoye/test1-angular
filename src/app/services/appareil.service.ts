export class AppareilService{
    appareils=[
    {
      name:"Machine à laver",
      status: "allumé"
    },
    {
      name:"Télévision",
      status: "éteint"
    },
    {
      name:"Ordinateur",
      status: "allumé"
    }
  ];
  switchOnAll(){
      for(let appareil of this.appareils){
          appareil.status='allumé';
      }
  }
  switchOffAll(){
      for(let appareil of this.appareils){
          appareil.status='éteint';
      }
  }
  switchOnOne(index: number){
    this.appareils[index].status='allumé';
  }
  switchOffOne(index: number){
    this.appareils[index].status='éteint';
  }
}