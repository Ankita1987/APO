import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: 'VendorList.html'
})
export class VendorListComponent {
  data:any;
  constructor(private route: ActivatedRoute,private router:Router, private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
    this.getVendor()
   
  } 
  
  getVendor(){    
    this._masterService.getVendor().then((data) => {
      this.data = data;   
    })   
  }


  viewVendorDetails(vendorId)
   {
    this.router.navigate(['/Admin/VendorManagement/ViewVendorsDetails', vendorId]); 
  }
}