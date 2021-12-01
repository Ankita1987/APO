import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {EMDService} from '../../../services/EMD.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: 'ViewEMD.html'
})
export class ViewEMDComponent {
data:any;

  constructor(private route: ActivatedRoute,  private router:Router,private _emdService:EMDService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {     
   this. getEMD();  
   
  }

  getEMD(){   
    this._emdService.getEMD().then((data) => {
      this.data = data;   
    })   
  }


  releaseForFeitOFEMD(emdId)
  {
    this.router.navigate(['/Admin/EMDManagement/ReleaseForFeitOFEMD', emdId]);
  }
}
