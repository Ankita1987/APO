import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
import { AddVendorCertificateComponent } from './AddVendorCertificate';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: 'RegtVendor.html'
})
export class RegtVendorComponent {
  add:any;
  update:any;
  vendorId :any;
  nameOfFirm:any;
  isRegister :any;
  isMSME :any;
  registerWithAPO :any;
  gstNumber :any;
  remarks :any;
  data:any;


  constructor(private route: ActivatedRoute,  private router:Router,private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
    this.getVendor()
    this.add=true;
    this.update=false;    
  }  

  getVendor(){    
    this._masterService.getVendor().then((data) => {
      this.data = data;   
    })   
  }


  
addVendor()
{ 
 
  this._masterService.addVendor(this.vendorId,this.nameOfFirm ,this.isRegister,this.isMSME ,  this.registerWithAPO ,this.gstNumber, this.remarks).then((data) => {
    this.data = data;
   this.clearModel();
   if(data["isSuccess"]==true)
   {
     alert("Item Added Successfully !")
   }
   else
   {
     alert("Error !!!!")
   }
   this.getVendor();
   this.clearModel();
  })
}


clearModel(){    
  this.vendorId = null;
  this.nameOfFirm = null;
  this.isRegister = null;
  this.isMSME=null;
  this.registerWithAPO = null;
  this.gstNumber = null;
  this.remarks=null;
  this.add=true;
  this.update=false;  
}

editVendor(vendorId)
{    
  this._masterService.editVendor(vendorId).then((data) => {    
  this.data=data;
  console.log(data);
  this.vendorId = data["vendorId"];
  this.nameOfFirm = data["nameOfFirm"];
  this.isRegister = data["isRegister"];
  this.isMSME=data["ismsme"];
  this.registerWithAPO = data["registerWithAPO"];
  this.gstNumber = data["gstNumber"];
  this.remarks=data["remarks"];
  this.add=false;
  this.update=true;
  
  });  

}

removeVendor(vendorId)
{    
  this._masterService.removeVendor(vendorId).then((data) => {    
  this.data=data;
  if(data["isSuccess"]==true)
  {
    alert("Item Remove Successfully !")
  }
  else
  {
    alert("Error !!!!")
  }
 
  this.getVendor();
  this.clearModel();
  });
}

updateVendor()
{   
  debugger;  
  this._masterService.updateVendor(this.vendorId,this.nameOfFirm ,this.isRegister,this.isMSME ,  this.registerWithAPO ,this.gstNumber, this.remarks).then((data) => {
    this.data = data;    
   if(data["isSuccess"]==true)
   {
     alert("Item Update Successfully !")
   }
   else
   {
     alert("Error !!!!")
   }
   this.getVendor();
   this.clearModel();
  })
}



addVendorRoute(vendorId,str)
{
  debugger;
  if(str=="c")
  {
    //this.route.params.subscribe( params =>console.log(vendorId));   
    this.router.navigate(['/Admin/VendorManagement/AddVendorCertificate',vendorId ]);
  }
  if(str=="w")
  {
   // this.route.params.subscribe( params =>console.log(vendorId));   
    this.router.navigate(['/Admin/VendorManagement/AddVendorWareHouse', vendorId]);
  }
 
}






}
