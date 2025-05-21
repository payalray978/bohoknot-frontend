import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
activeForm:string='Login';
changeView(formName: string){
this.activeForm = formName;
}
}
