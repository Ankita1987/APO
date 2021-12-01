import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';

import {RFPNITService} from '../../../services/RFPNIT.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  templateUrl: 'ViewNIT.html'
})
export class ViewNITComponent {

  rfpId:any;
  data:any;
  

  constructor(private route: ActivatedRoute,  private router:Router,private _rfpService:RFPNITService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
    this.rfpId=this.route.snapshot.params[''];   
   this.editRFPNIT(this.rfpId);   
  }
  editRFPNIT(rfpId)
  {   this._rfpService.editRFPNIT(rfpId).then((data) => {    
        this.data=data;
       console.log(data);      
     });     
  
  }
 



}



