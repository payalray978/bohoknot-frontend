import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { userRegister } from '../../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgClass, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
activeForm:string='Login';
registerobj: userRegister = new userRegister();
changeView(formName: string){
this.activeForm = formName;
}
onRegister(){
  
}
}
