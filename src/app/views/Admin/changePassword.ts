import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RolesService} from '../../../services/roles.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  templateUrl: './changePassword.html'
})
export class ChangePasswordComponent implements OnInit {

data:any;

currentPass:any;
newPass:any;
confirmPass:any;


  constructor(private _roleService:RolesService, private loginService:LoginService,private authService:AuthService) { }

  ngOnInit() {

   this.checklogin();

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

  changePassword()
  {
  this.checklogin().then((data)=>{
    if(data==true)
    {

      this.loginService.changePassword(this.newPass,this.currentPass,this.confirmPass).then((data)=>{

       alert(data);
    
      })
    
  }
    });
  
  
  }
  clearModel(){

   

  }

}
