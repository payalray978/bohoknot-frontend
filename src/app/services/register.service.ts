import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {userRegister} from '../model/user.model'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
registeruser(obj: userRegister){
  return this.http.post("http://127.0.0.1:8000/register", obj)
}
}
