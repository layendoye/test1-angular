import { Subject } from 'rxjs';

export class AppareilService{
    
    appareilSubject= new Subject<any[]>();//le subject emmettra la liste des appareils lorsqu on lui demandera, <any[]> veut dire qu il va retourner un tableau de type any (string, int...)
    private appareils=[//pour ne pas manipuler les données directement
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
  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());//la methode next force le subject à emmetre ce qu on lui passe en argument et la methode this.appareils.slice() donne une cope de la liste des appareil
  }
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
    this.emitAppareilSubject();//Pour actualiser les données...on modifie et on actualise
  }
  switchOffAll(){
    for(let appareil of this.appareils){
        appareil.status='éteint';
    }
    this.emitAppareilSubject();//Pour actualiser les données...on modifie et on actualise
  }
  switchOnOne(index: number){
    this.appareils[index].status='allumé';
    this.emitAppareilSubject();//Pour actualiser les données...on modifie et on actualise
  }
  switchOffOne(index: number){
    this.appareils[index].status='éteint';
    this.emitAppareilSubject();//Pour actualiser les données...on modifie et on actualise
  }
}