import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RolesService} from '../../../services/roles.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  templateUrl: './forgotPasswordRequest.html'
})
export class forgotPasswordComponent implements OnInit {

data:any;

currentPass:any;
newPass:any;
confirmPass:any;


  constructor(private _roleService:RolesService, private loginService:LoginService,private authService:AuthService) { }

  ngOnInit() {

    this.checklogin().then((data)=>{
      if(data==true)
      {
  
        this.loginService.getNotifications().then((data)=>{
  this.data = data;
      
        })
      
    }
      });

  }

checklogin()
{
  return new Promise(resolve => {
  this.loginService.checkLogin().then((data)=>{

    if(data==true)
    {
      resolve(data);
    }
    else{
     this.authService.logout();
     resolve(data);
    }

  })
})

}


  clearModel(){
  }

}
