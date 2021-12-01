import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {tecService} from '../../../services/tec.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';




@Component({
  templateUrl: 'TECSummary.html'
})
export class TECSummaryComponent {
  consumptionYearDDL :any;
  data:any;
  vendorData:any;
  constructor(private route: ActivatedRoute,  private router:Router,private _tecService:tecService, private loginService:LoginService,private authService:AuthService) { 
  } 

  ngOnInit() {  
    this.getConsumptionYear();
  }
    getConsumptionYear(){
    this._tecService.getConsumptionYear().then((data) => {
      this.consumptionYearDDL = data;     
    })   
  }

  getRFPForTEC(cy){
    debugger;
    this._tecService.getRFPForTEC(cy).then((data) => {
      this.data = data;     
    })   
  }
  getVendorForTEC(vendorId)
  {
    debugger;
    this._tecService.GetVendorForTEC(vendorId).then((data) => {
      this.vendorData = data;     
    })   

  }






}
