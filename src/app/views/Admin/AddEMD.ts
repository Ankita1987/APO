import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {EMDService} from '../../../services/EMD.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';
import {MasterService} from '../../../services/Master.service';


@Component({
  templateUrl: 'AddEMD.html'
})
export class AddEMDComponent {
data:any;

  rfpData:any;  
  vendorData:any;
  vendorDetails:any;
  emdId:any;
    rfpId:any;
    vendorId:any;
    tenderFee:any;
    emdApplicable:any;
    emdAmountRecd:any;
    fdrbgNumber:any;
    validityOFFDRBGFromDate:any;
    validityOFFDRBGToDate:any;
    releaseOfForFeit:any;
    releaseOfForFeitDate:any;
    add:any;
    update:any;


  constructor(private _masterService:MasterService, private route: ActivatedRoute,  private router:Router,private _emdService:EMDService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {     
   this.getRFPNIT();
   this.getVendor();
   this. getEMD();  
   this.add=true;
   this.update=false;
  }
getRFPNIT(){  
  this._emdService.getRFPNIT().then((data) => {
      this.rfpData = data;     
    })   
  }
  getVendor(){    
    this._masterService.getVendor().then((data) => {
      this.vendorData = data;   
    })   
  }

  getVendorDetails(vendorId){   
    this._emdService.getVendorDetails(vendorId).then((data) => {
      this.vendorDetails = data;   
    })   
  }

  getEMD(){   
    this._emdService.getEMD().then((data) => {
      this.data = data;   
    })   
  }

  clearModel(){
    this.emdId=null;
    this.rfpId=null;
    this.vendorId=null;
    this.tenderFee=null;
    this.emdApplicable=null;
    this.emdAmountRecd=null;
    this.fdrbgNumber=null;
    this.validityOFFDRBGFromDate=null;
    this.validityOFFDRBGToDate=null;
  
    this.add=true;
    this.update=false;
  }
  addEMD()
  { 
   
    this._emdService.addEMD(this.rfpId,this.vendorId, this.tenderFee,this.emdApplicable, this.emdAmountRecd,    this.fdrbgNumber,this.validityOFFDRBGFromDate, this.validityOFFDRBGToDate).then((data) => {
      this.data = data;     
     if(data["isSuccess"]==true)
     {
       alert("Added Successfully !")
       this.clearModel();    
       this.getEMD();  
     }
     else
     {
       alert("Error !!!!")
     }
     
    })
  }


  editEMD(emdId)
  {
    debugger;
    this._emdService.editEMD(emdId).then((data) => {
      this.data = data;   
      console.log(data);
      this.emdId=data["emdId"];
      this.rfpId=data["rfpId"];
      this.vendorId=data["vendorId"];
      this.getVendorDetails(this.vendorId);
      this.tenderFee=data["tenderFee"];
      this.emdApplicable=data["emdApplicable"];
      this.emdAmountRecd=data["emdAmountRecd"];
      this.fdrbgNumber=data["fdrbgNumber"];
      this.validityOFFDRBGFromDate=data["validityOFFDRBGFromDate"];
      this.validityOFFDRBGToDate=data["validityOFFDRBGToDate"];
      this.add=false;
      this.update=true;
    })   

  }

  updateEMD()
  {
    
    this._emdService.updateEMD(this.emdId,this.rfpId,this.vendorId, this.tenderFee,this.emdApplicable, this.emdAmountRecd,    this.fdrbgNumber,this.validityOFFDRBGFromDate, this.validityOFFDRBGToDate).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
       alert("updated Successfully !")
       this.clearModel(); 
       this.getEMD();     
     }
     else
     {
       alert("Error !!!!")
     }
     
    })
  }
  removeEMD(emdId)
  {

    this._emdService.removeEMD(emdId).then((data) => {    
      this.data=data;
      if(data["isSuccess"]==true)
      {
        alert("Remove Successfully !")
        this.clearModel();
        this.getEMD();
      }
      else
      {
        alert("Error !!!!")
      }     
      
    });
  }
}
