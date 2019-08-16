import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AppareilService{
    
    appareilSubject= new Subject<any[]>();//le subject emmettra la liste des appareils lorsqu on lui demandera, <any[]> veut dire qu il va retourner un tableau de type any (string, int...)
    private appareils=[];
  constructor(private httpClient: HttpClient){}
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
  addAppareil(name: string, status: string){
    const appareilObject={
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name=name;
    appareilObject.status=status;
    appareilObject.id=this.appareils[(this.appareils.length - 1)].id+1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
  saveAppareilsToServer(){
    this.httpClient
      .put('https://http-client-demo-b46a7.firebaseio.com/appareils.json',this.appareils)
      .subscribe(
        ()=>{
          console.log('Enregistrement terminé');
        },
        (error)=>{
          console.log('Erreur de sauvegarde ! '+error);
        }
      );
  }
  getAppareilsFromServer(){
    this.httpClient
      .get<any[]>('https://http-client-demo-b46a7.firebaseio.com/appareils.json')
      .subscribe(
        (response)=>{
          this.appareils=response;
          this.emitAppareilSubject();
        },
        (error)=>{
          console.log('Erreur de chargement ! '+error);
        }
      );
  }
}