import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService{
    private users: User[]=[
        {
            firstName: 'Abdou',
            lastName: 'Ndoye',
            email: 'layendoyesn@gmail.com',
            drinkPreference: "Coca",
            hobbies:[
                'coder',
                'finance'
            ]
        }
    ];
    userSubject=new Subject<User[]>();
    emitUsers(){
        this.userSubject.next(this.users.slice())
    }
    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
}