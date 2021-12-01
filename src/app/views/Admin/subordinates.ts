import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RolesService} from '../../../services/roles.service';
import {AuthService} from '../../../services/auth.service';
@Component({
  templateUrl: './subordinates.html'
})
export class subordinatesComponent implements OnInit {

  data:any;
  userName:any;
  //roles:any=[{"roleName":"NoSubordinates","description":"That user who cannot have subordinates."},{"roleName":"User","description":"Generic user with no previlleges. By default added to all users created."},{"roleName":"Administrator","description":"The administrator of the application."}];

  constructor(public loginService: LoginService,private roleService:RolesService,private authService:AuthService) {
  
   }

  ngOnInit() {

    this.checklogin().then((data)=>{
      if(data==true)
      {
 this.loginService.getSubordinates().then((data) => {
  this.data = data;
})
      }
    })
  }

resetPassword(Id)
{
  this.loginService.resetPassword(Id).then((data) => {
    this.data = data;
    alert(this.data);
  })
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


}
