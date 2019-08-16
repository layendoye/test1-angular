import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.userForm=this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      drinkPreference: ['',Validators.required],
      hobbies: this.formBuilder.array([])
    })
  }
  onSubmitForm(){
    const formValue=this.userForm.value;
    const NewUser=new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies']?formValue['hobbies']:[] //ternaire si formValue['hobbies'] existe formValue['hobbies'] sinon []
    );
    this.userService.addUser(NewUser);
    this.router.navigate(['/users']);
  }
  getHobbies(){//pour des questions de typage nous creons cette methode qui permet de retourner la form array hobbies sous form de form array
    return this.userForm.get('hobbies') as FormArray;//get('hobbies') pour recuprer le controle lui même
  }
  onAddHobby(){
    const newHobbyControl=this.formBuilder.control('',Validators.required);//on cree un nouvel input
    this.getHobbies().push(newHobbyControl);//this.getHobbies() pour avoir acces au FormArray
  }
}
