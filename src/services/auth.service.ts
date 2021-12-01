import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalService} from  '../services/global.service';

@Injectable()
export class AuthService {
 
  constructor(private myRoute: Router, public  globalService:GlobalService) { }
 
  getToken() {
    // alert(sessionStorage.getItem("accessToken"));
    return sessionStorage.getItem("accessToken");
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    sessionStorage.clear();
    this.myRoute.navigate(["/login"]);
  }
}