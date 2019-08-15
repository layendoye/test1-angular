import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()//pour injecter un service dans un autre il faut utiliser le décorateur @Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private authService: AuthService,private router: Router){//grace à @Injectable()

    }
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {//il va return soit un  Observable qui sera de type boolean soit ...un observable est un objet qui emmet des infos dans le temps
    
        if(this.authService.isAuth){
            return true;
        }
        else{
            this.router.navigate(['/auth']);
        }
    }
}