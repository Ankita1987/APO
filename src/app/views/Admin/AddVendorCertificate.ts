import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: 'AddVendorCertificate.html'
})

export class AddVendorCertificateComponent  {  
 
  add:any;
  update:any;
  data:any;
  vendorCertificationId :any;
  vendorId:any;
    registrationValidityWithAPOFromDate :any;
    registrationValidityWithAPOToDate :any;
    productionCapacityPerMonthAsPerFSSAI :any;
    fssaiCertificateNumber :any;
    validityOfFSSAICertificateFromDate :any;
    validityOfFSSAICertificateToDate :any;
    isohaccpCertificateNumber :any;
    validityOfISOHACCPCertificateNumberFromDate :any;
    validityOfISOHACCPCertificateNumberToDate :any;
    technicalInspectionReport :any;
    validityOfTechnicalInspectionReportFromDate :any;
    validityOfTechnicalInspectionReportToDate :any;
    hygieneInspectionReport :any;
    validityOfHygieneInspectionReportFromDate :any;
    validityOfHygieneInspectionReportToDate :any;
    tradeMarkCertificateNumber :any;
    validityOfTradeMarkCertificateNumberFromDate :any;
    validityOfTradeMarkCertificateNumberToDate :any;

  
  constructor(private route: ActivatedRoute,private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {   
    debugger;   

    
    this.vendorId=this.route.snapshot.params[''];
    this.getVendorCertificate(this.vendorId);  
    this.add=true;
    this.update=false;    
  }  

  

  clearModel()
  {
    this.vendorCertificationId =null;
    this.registrationValidityWithAPOFromDate  =null;
    this.registrationValidityWithAPOToDate  =null;
    this.productionCapacityPerMonthAsPerFSSAI  =null;
    this.fssaiCertificateNumber  =null;
    this.validityOfFSSAICertificateFromDate  =null;
    this.validityOfFSSAICertificateToDate =null;
    this.isohaccpCertificateNumber =null;
    this.validityOfISOHACCPCertificateNumberFromDate =null;
    this.validityOfISOHACCPCertificateNumberToDate    =null;
    this.technicalInspectionReport  =null;
    this.validityOfTechnicalInspectionReportFromDate  =null;
    this.validityOfTechnicalInspectionReportToDate  =null;
    this.hygieneInspectionReport  =null;
    this.validityOfHygieneInspectionReportFromDate  =null;
    this.validityOfHygieneInspectionReportToDate  =null;
    this.tradeMarkCertificateNumber  =null;
    this.validityOfTradeMarkCertificateNumberFromDate =null;
    this.validityOfTradeMarkCertificateNumberToDate =null;
    this.add=true;
    this.update=false;   
  }
    
  addVendorCertificate()
{ 
 
    this._masterService.addVendorCertificate(
    this.vendorId,
    this.registrationValidityWithAPOFromDate ,
    this.registrationValidityWithAPOToDate ,
    this.productionCapacityPerMonthAsPerFSSAI,
    this.fssaiCertificateNumber ,
    this.validityOfFSSAICertificateFromDate ,
    this.validityOfFSSAICertificateToDate ,
    this.isohaccpCertificateNumber ,
    this.validityOfISOHACCPCertificateNumberFromDate ,
    this.validityOfISOHACCPCertificateNumberToDate ,
    this.technicalInspectionReport ,
    this.validityOfTechnicalInspectionReportFromDate,
    this.validityOfTechnicalInspectionReportToDate ,
    this.hygieneInspectionReport ,
    this.validityOfHygieneInspectionReportFromDate ,
    this.validityOfHygieneInspectionReportToDate ,
    this.tradeMarkCertificateNumber ,
    this.validityOfTradeMarkCertificateNumberFromDate ,
    this.validityOfTradeMarkCertificateNumberToDate).then((data) => {
    this.data = data;
   this.clearModel();
   if(data["isSuccess"]==true)
   {
     alert("Added Successfully !")
     this.clearModel();
     this.vendorId=this.route.snapshot.params[''];
     this.getVendorCertificate(this.vendorId);  
   }
   else
   {
     alert("Error !!!!")
   }   
   
  })
}
getVendorCertificate(vendorId)
{  
  this._masterService.getVendorCertificate(vendorId).then((data) => {
    this.data = data;   
  })   
}




//

editVendorCertificate(vendorCertificationId)
{    
  this._masterService.editVendorCertificate(vendorCertificationId).then((data) => {    
  this.data=data;  
  this.vendorId = data["vendorId"];
  this.vendorCertificationId =data["vendorCertificationId"];
  this.registrationValidityWithAPOFromDate  =data["registrationValidityWithAPOFromDate"];
  this.registrationValidityWithAPOToDate  =data["registrationValidityWithAPOToDate"];
  this.productionCapacityPerMonthAsPerFSSAI  =data["productionCapacityPerMonthAsPerFSSAI"];
  this.fssaiCertificateNumber  =data["fssaiCertificateNumber"];
  this.validityOfFSSAICertificateFromDate  =data["validityOfFSSAICertificateFromDate"];
  this.validityOfFSSAICertificateToDate =data["isohaccpCertificateNumber"];
  this.isohaccpCertificateNumber =data["vendorId"];
  this.validityOfISOHACCPCertificateNumberFromDate =data["validityOfISOHACCPCertificateNumberFromDate"];
  this.validityOfISOHACCPCertificateNumberToDate    =data["validityOfISOHACCPCertificateNumberToDate"];
  this.technicalInspectionReport  =data["technicalInspectionReport"];
  this.validityOfTechnicalInspectionReportFromDate  =data["validityOfTechnicalInspectionReportFromDate"];
  this.validityOfTechnicalInspectionReportToDate  =data["validityOfTechnicalInspectionReportToDate"];
  this.hygieneInspectionReport  =data["hygieneInspectionReport"];
  this.validityOfHygieneInspectionReportFromDate  =data["validityOfHygieneInspectionReportFromDate"];
  this.validityOfHygieneInspectionReportToDate  =data["validityOfHygieneInspectionReportToDate"];
  this.tradeMarkCertificateNumber  =data["tradeMarkCertificateNumber"];
  this.validityOfTradeMarkCertificateNumberFromDate =data["validityOfTradeMarkCertificateNumberFromDate"];
  this.validityOfTradeMarkCertificateNumberToDate =data["validityOfTradeMarkCertificateNumberToDate"];
  this.add=false;
  this.update=true;
  
  });  

}


updateVendorCertificate()
{
  debugger;  
  this._masterService.updateVendorCertificate(this.vendorCertificationId,this.vendorId,
    this.registrationValidityWithAPOFromDate ,
    this.registrationValidityWithAPOToDate ,
    this.productionCapacityPerMonthAsPerFSSAI,
    this.fssaiCertificateNumber ,
    this.validityOfFSSAICertificateFromDate ,
    this.validityOfFSSAICertificateToDate ,
    this.isohaccpCertificateNumber ,
    this.validityOfISOHACCPCertificateNumberFromDate ,
    this.validityOfISOHACCPCertificateNumberToDate ,
    this.technicalInspectionReport ,
    this.validityOfTechnicalInspectionReportFromDate,
    this.validityOfTechnicalInspectionReportToDate ,
    this.hygieneInspectionReport ,
    this.validityOfHygieneInspectionReportFromDate ,
    this.validityOfHygieneInspectionReportToDate ,
    this.tradeMarkCertificateNumber ,
    this.validityOfTradeMarkCertificateNumberFromDate ,
    this.validityOfTradeMarkCertificateNumberToDate).then((data) => {
    this.data = data;    
   if(data["isSuccess"]==true)
   {
     alert("Update Successfully !")
     this.vendorId=this.route.snapshot.params[''];
     this.getVendorCertificate(this.vendorId);
     this.clearModel();
   }
   else
   {
     alert("Error !!!!")
   }

  })
}



removeVendorCertificate(vendorCertificationId)
{    
  this._masterService.removeVendorCertificate(vendorCertificationId).then((data) => {    
  this.data=data;
  if(data["isSuccess"]==true)
  {
    alert("Remove Successfully !")
    this.vendorId=this.route.snapshot.params[''];
    this.getVendorCertificate(this.vendorId);
    this.clearModel();
  }
  else
  {
    alert("Error !!!!")
  }
 
 
  });
}


}
