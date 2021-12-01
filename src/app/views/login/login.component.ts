import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';
import {GlobalService} from  '../../../services/global.service';
import {AuthService} from '../../../services/auth.service';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{ 

  data:any;
  username:any;
  password:any;

 
  constructor(private  auth:AuthService,public loginService: LoginService,private _router: Router,public  globalService:GlobalService) { }


  Login() { 
    this.loginService.UserAuth(this.username,this.password).then((data) => {
      this.data = data;

    sessionStorage.setItem("accessToken", this.data.access_token);
    sessionStorage.setItem("refresh_token", this.data.refresh_token);
    sessionStorage.setItem("userId", this.data.userId);
      this._router.navigate(['/dashboard']);
      
  
  })
}

onSearchChange(searchValue : string ) {  
  const md5 = new Md5();
  this.password =  md5.appendStr(searchValue).end();
}
forgotPassword()
{
  this.loginService.forgotPassword(this.username).then((data) => {
    this.data = data;
alert(JSON.stringify(this.data));
   // this._router.navigate(['/dashboard']);
    

})
}

ngOnInit() {
}
}
