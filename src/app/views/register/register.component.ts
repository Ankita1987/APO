import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RolesService} from '../../../services/roles.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data:any;
  roles:any;
  Role:any=[];
  UserName:any;
  Email:any;
  PersonnelNumber:any;
  FullName:any;
  EstablishmentFull:any;
  EstablishmentAbbreviation:any;
  Rank:any;
  PhoneNumber:any;
  Password:any;
  Appointment:any;
  ASCON:any;
  //roles:any=[{"roleName":"NoSubordinates","description":"That user who cannot have subordinates."},{"roleName":"User","description":"Generic user with no previlleges. By default added to all users created."},{"roleName":"Administrator","description":"The administrator of the application."}];

  constructor(public loginService: LoginService,private roleService:RolesService) {
  
   }

  ngOnInit() {
    this.roleService.getRoles().then((data) => {
      this.roles = data;
    })
  }

  setValue() { 


  this.loginService.UserRegistration(this.Password,this.Appointment,this.ASCON,this.Role,this.UserName,this.Email,this.Rank,this.PersonnelNumber,this.FullName,this.EstablishmentFull,this.EstablishmentAbbreviation,null,null,null,this.PhoneNumber).then((data) => {
    this.data = data;
  
    this.data = JSON.parse(this.data);
    console.log(this.data);
    

})
}

  clearModel()
  {
    this.Role=null;
    this.UserName=null;
    this.Email = null;
    this.PersonnelNumber=null;
    this.FullName = null;
    this.EstablishmentFull=null;
    this.EstablishmentAbbreviation=null;
    this.Rank = null;
    this.PhoneNumber=null;
  }


}
