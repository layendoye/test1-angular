import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';//AppareilService c est le nom de l export dans appareil.service.ts
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string ='Appareil';
  status: string ='Status';
  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {//ActivatedRoute contient les infos de la route active

   }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];//renvoi l id comme chaine de caractere '2'
    this.name=this.appareilService.getAppareilById(+id).name;// le + permet de convertir le '2' en 2
    this.status=this.appareilService.getAppareilById(+id).status;
  }

}
