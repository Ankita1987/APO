import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RFPNITService} from '../../../services/RFPNIT.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  templateUrl: 'ListOfNIT.html'
})
export class ListOfNITComponent {
  data:any;

  constructor(private route: ActivatedRoute,  private router:Router,private _rfpService:RFPNITService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
   this.getRFPNIT();
  }
getRFPNIT(){
    this._rfpService.getRFPNIT().then((data) => {
      this.data = data;     
    })   
  }
  viewNITDetails(rfpId)
  {
   this.router.navigate(['/Admin/NITManagement/ViewNIT', rfpId]); 
 }
}
