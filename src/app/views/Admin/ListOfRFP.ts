import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RFPNITService} from '../../../services/RFPNIT.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  templateUrl: 'ListOfRFP.html'
})
export class ListOfRFPComponent {

  data:any;
  consumptionYearDDL :any;

  constructor(private route: ActivatedRoute,  private router:Router,private _rfpService:RFPNITService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
   this.getRFPNIT();
   this.getConsumptionYear();
  }
getRFPNIT(){
    this._rfpService.getRFPNIT().then((data) => {
      this.data = data;     
    })   
  }
  getConsumptionYear(){
    this._rfpService.getConsumptionYear().then((data) => {
      this.consumptionYearDDL = data;     
    })   
  }

}
