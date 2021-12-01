import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';



@Component({
  templateUrl: 'ViewVendorsDetails.html'
})
export class ViewVendorsDetailsComponent {


 
  data:any;
  BasicDetails:any;
  registrationValidityWithAPOFromDate:any;
  registrationValidityWithAPOToDate:any;
  productionCapacityPerMonthAsPerFSSAI:any;
  fssaiCertificateNumber:any;
  validityOfFSSAICertificateFromDate:any;
  validityOfFSSAICertificateToDate:any;
  isohaccpCertificateNumber:any;
  validityOfISOHACCPCertificateNumberFromDate:any;
  validityOfISOHACCPCertificateNumberToDate:any;
  technicalInspectionReport:any;
  validityOfTechnicalInspectionReportFromDate
  validityOfTechnicalInspectionReportToDate:any;
  hygieneInspectionReport:any;
  validityOfHygieneInspectionReportFromDate:any;
  validityOfHygieneInspectionReportToDate:any;
  tradeMarkCertificateNumber:any;
  validityOfTradeMarkCertificateNumberFromDate:any;
  validityOfTradeMarkCertificateNumberToDate:any;  
  vendorId :any;  
  nameOfFirm:any;
  gstNumber:any;
  remarks:any;
  isRegisterVal:any;
  ismsmeVal:any;
  registerWithAPOVal:any;

  constructor(private route: ActivatedRoute,  private router:Router,private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
    debugger;
    this.vendorId=this.route.snapshot.params[''];
    // console.log(this.vendorId);
    this.getVendorDetails(this.vendorId);
  
  }


  getVendorDetails(vendorId){   
    
    this._masterService.getVendorDetails(vendorId).then((data) => {
      debugger;
      this.BasicDetails = data["vendorDetails"];   
      this.data = data["ilVendorWareHouse"];     
     

    })   
  }

}
