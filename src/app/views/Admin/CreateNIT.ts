import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {RFPNITService} from '../../../services/RFPNIT.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  templateUrl: 'CreateNIT.html'
})
export class CreateNITComponent {

  consumptionYearDDL :any;
  data:any;
  editData:any;
  add:any;
  update:any;
  rfpId :any;
  dpLetterId :any;
  tenderCost :any;
  rfpNo :any;
  rfpDate :any;
  nitDate :any;
  chairmanPC :any;
  prebidMeeting :any;
  bidSubmissionStartDate :any;
  bidSubmissionStartTime :any;
  clarificationStartDate :any;
  clarificationStartTime :any;
  clarificationEndDate :any;
  clarificationEndTime :any;
  prebidMeetingDate :any;
  prebidMeetingTime :any;
  bidSubmissionEndDate :any;
  bidSubmissionEndTime :any;
  physicalDocsSubmissionEndDate :any;
  physicalDocsSubmissionEndTime :any;
  bidOpeningStartDate :any;
  bidOpeningStartTime :any;
  consumptionYear:any;
  


  constructor(private route: ActivatedRoute,  private router:Router,private _rfpService:RFPNITService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {    
    
   this.getConsumptionYear();   
   this.getRFPNIT();
   this.add=true;
   this.update=false;
  }



  getConsumptionYear(){
    this._rfpService.getConsumptionYear().then((data) => {
      this.consumptionYearDDL = data;     
    })   
  }

  getRFPNIT(){
    this._rfpService.getRFPNIT().then((data) => {
      this.data = data;     
    })   
  }


  clearModel(){    
    this.rfpId  =null;
    this.dpLetterId   =null;
    this.tenderCost  =null;
    this.rfpNo  =null;
    this.rfpDate =null;
    this.nitDate   =null;
    this.chairmanPC   =null;
    this.prebidMeeting   =null;
    this.bidSubmissionStartDate   =null;
    this.bidSubmissionStartTime   =null;
    this.clarificationStartDate   =null;
    this.clarificationStartTime   =null;
    this.clarificationEndDate  =null;
    this.clarificationEndTime   =null;
    this.prebidMeetingDate   =null;
    this.prebidMeetingTime =null;
    this.bidSubmissionEndDate   =null;
    this.bidSubmissionEndTime   =null;
    this.physicalDocsSubmissionEndDate  =null;
    this.physicalDocsSubmissionEndTime   =null;
    this.bidOpeningStartDate   =null;
    this.bidOpeningStartTime  =null;
    this.add=true;
    this.update=false;
  }
  addRFPNIT()
{ 
 
  debugger;
    this._rfpService.addRFPNIT(this.consumptionYear,this.dpLetterId ,
      this.tenderCost  ,
      this.rfpNo ,
      this.rfpDate ,      
      this.chairmanPC ,      
      this.bidSubmissionStartDate ,
      this.bidSubmissionStartTime ,
      this.clarificationStartDate ,
      this.clarificationStartTime ,
      this.clarificationEndDate ,
      this.clarificationEndTime ,
      this.prebidMeetingDate,
      this.prebidMeetingTime,
      this.bidSubmissionEndDate ,
      this.bidSubmissionEndTime ,
      this.physicalDocsSubmissionEndDate ,
      this.physicalDocsSubmissionEndTime ,
      this.bidOpeningStartDate ,
      this.bidOpeningStartTime).then((data) => {
    this.data = data;   
   if(data["isSuccess"]==true)
   {
     alert("Added Successfully !")
     this.clearModel();   
     this.getRFPNIT(); 
  
   }
   else
   {
     alert("Error !!!!")
   }   
   
  })
}
editRFPNIT(rfpId)
{
  debugger;
   
    this._rfpService.editRFPNIT(rfpId).then((data) => {    
      this.data=data;
     console.log(data);
     this.rfpId = data["rfpId"];    
    this.consumptionYear=data["consumptionYear"];
    this.dpLetterId  =data["dpLetterId"];
    this.tenderCost  =data["tenderCost"];
    this.rfpNo  =data["rfpNo"];
    this.rfpDate  =data["rfpDate"];    
    this.chairmanPC  =data["chairmanPC"];    
    this.bidSubmissionStartDate  =data["bidSubmissionStartDate"];
    this.bidSubmissionStartTime  =data["bidSubmissionStartTime"];
    this.clarificationStartDate  =data["clarificationStartDate"];
    this.clarificationStartTime  =data["clarificationStartTime"];
    this.clarificationEndDate  =data["clarificationEndDate"];
    this.clarificationEndTime  =data["clarificationEndTime"];
    this.prebidMeetingDate  =data["prebidMeetingDate"];
    this.prebidMeetingTime  =data["prebidMeetingTime"];
    this.bidSubmissionEndDate  =data["bidSubmissionEndDate"];
    this.bidSubmissionEndTime  =data["bidSubmissionEndTime"];
    this.physicalDocsSubmissionEndDate  =data["physicalDocsSubmissionEndDate"];
    this.physicalDocsSubmissionEndTime  =data["physicalDocsSubmissionEndTime"];
    this.bidOpeningStartDate  =data["bidOpeningStartDate"];
    this.bidOpeningStartTime  =data["bidOpeningStartTime"]; 
     
      this.add=false;
      this.update=true;
      
      });  
  

}
removeRFPNIT(rfpId)
  {    
    this._rfpService.removeRFPNIT(rfpId).then((data) => {    
    this.data=data;
    if(data["isSuccess"]==true)
    {
      alert("Remove Successfully !")
      this.clearModel();
      this.getRFPNIT();
    }
    else
    {
      alert("Error !!!!")
    }
   
    
    });
  }

  
  updateRFPNIT()
  { 
   
    debugger;
      this._rfpService.updateRFPNIT(this.rfpId, this.consumptionYear,this.dpLetterId ,
        this.tenderCost,
        this.rfpNo ,
        this.rfpDate ,      
        this.chairmanPC ,      
        this.bidSubmissionStartDate ,
        this.bidSubmissionStartTime ,
        this.clarificationStartDate ,
        this.clarificationStartTime ,
        this.clarificationEndDate ,
        this.clarificationEndTime ,
        this.prebidMeetingDate,
        this.prebidMeetingTime,
        this.bidSubmissionEndDate ,
        this.bidSubmissionEndTime ,
        this.physicalDocsSubmissionEndDate ,
        this.physicalDocsSubmissionEndTime ,
        this.bidOpeningStartDate ,
        this.bidOpeningStartTime ).then((data) => {
      this.data = data;   
     if(data["isSuccess"]==true)
     {
       alert("Update Successfully !")
       this.clearModel();   
       this.getRFPNIT(); 
    
     }
     else
     {
       alert("Error !!!!")
     }   
     
    })
  }

  viewNITDetails(rfpId)
  {
   this.router.navigate(['/Admin/NITManagement/ViewNIT', rfpId]); 
 }
}
