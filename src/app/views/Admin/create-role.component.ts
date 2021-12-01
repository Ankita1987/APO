import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RolesService} from '../../../services/roles.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  templateUrl: './create-role.component.html'
})
export class CreateRoleComponent implements OnInit {

data:any;

  Name:any;
  Description:any;
  Discriminator:any;


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

  createRole()
  {
  this.checklogin().then((data)=>{
    if(data==true)
    {
    this._roleService.createRole(this.Name,this.Description).then((data) => {
      this.data = data;
     this.clearModel()
    })
    
  }
    });
  
  
  }
  clearModel(){

    this.Description = null;
    this.Name = null;

  }

}
