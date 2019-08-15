export class AppareilService{
    appareils=[
    {
      id:1,
      name:"Machine à laver",
      status: "allumé"
    },
    {
      id:2,
      name:"Télévision",
      status: "éteint"
    },
    {
      id:3,
      name:"Ordinateur",
      status: "allumé"
    }
  ];
  getAppareilById(id: number){
    const appareil=this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id==id;//return l objet appreil si son id == l id passé en paramettre
      }
    );
    return appareil;
  }
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