import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RFPNITService {

  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }


addRFPNIT(consumptionYear,dpLetterId,tenderCost,rfpNo,rfpDate,chairmanPC,bidSubmissionStartDate, bidSubmissionStartTime  ,  clarificationStartDate  ,  clarificationStartTime  ,  clarificationEndDate  ,  clarificationEndTime  ,  prebidMeetingDate  ,
  prebidMeetingTime  ,  bidSubmissionEndDate  ,  bidSubmissionEndTime  ,  physicalDocsSubmissionEndDate  ,  physicalDocsSubmissionEndTime  ,  bidOpeningStartDate  ,
  bidOpeningStartTime )
  { 
    let body: any = {ConsumptionYear:consumptionYear,DPLetterId:dpLetterId  ,TenderCost:tenderCost  ,RFPNo :rfpNo  ,RFPDate :rfpDate  ,
      ChairmanPC:chairmanPC  ,BidSubmissionStartDate:bidSubmissionStartDate  , BidSubmissionStartTime:bidSubmissionStartTime  ,ClarificationStartDate
      :clarificationStartDate  ,ClarificationStartTime:clarificationStartTime ,ClarificationEndDate:clarificationEndDate  ,  ClarificationEndTime:clarificationEndTime,PrebidMeetingDate:prebidMeetingDate
      ,PrebidMeetingTime:prebidMeetingTime  , BidSubmissionEndDate: bidSubmissionEndDate  , BidSubmissionEndTime: bidSubmissionEndTime  , 
      PhysicalDocsSubmissionEndDate:physicalDocsSubmissionEndDate  ,  PhysicalDocsSubmissionEndTime:physicalDocsSubmissionEndTime  , BidOpeningStartDate: bidOpeningStartDate  ,
      BidOpeningStartTime:bidOpeningStartTime
    };  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/RFPNIT/AddRFPNIT',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
getRFPNIT(){  
    		return new Promise(resolve => {
        this.http.get('http://localhost:55183/RFPNIT/GetRFPNIT').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });			
    	});

}
editRFPNIT(rfpId)
{   
  debugger;
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/RFPNIT/EditRFPNIT?id='+rfpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
removeRFPNIT(rfpId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/RFPNIT/RemoveRFPNIT?id='+rfpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
updateRFPNIT(rfpId,consumptionYear,dpLetterId,tenderCost,rfpNo,rfpDate,chairmanPC,bidSubmissionStartDate, bidSubmissionStartTime  ,  clarificationStartDate  ,  clarificationStartTime  ,  clarificationEndDate  ,  clarificationEndTime  ,  prebidMeetingDate  ,
  prebidMeetingTime  ,  bidSubmissionEndDate  ,  bidSubmissionEndTime  ,  physicalDocsSubmissionEndDate  ,  physicalDocsSubmissionEndTime  ,  bidOpeningStartDate  ,
  bidOpeningStartTime)
{ 
  let body: any = {RFPId:rfpId,ConsumptionYear: consumptionYear,  DPLetterId:dpLetterId  ,TenderCost:tenderCost  ,RFPNo :rfpNo  ,RFPDate :rfpDate  ,
    ChairmanPC:chairmanPC  ,BidSubmissionStartDate:bidSubmissionStartDate  , BidSubmissionStartTime:bidSubmissionStartTime  ,ClarificationStartDate
    :clarificationStartDate  ,ClarificationStartTime:clarificationStartTime ,ClarificationEndDate:clarificationEndDate  ,  ClarificationEndTime:clarificationEndTime,PrebidMeetingDate:prebidMeetingDate
    ,PrebidMeetingTime:prebidMeetingTime  , BidSubmissionEndDate: bidSubmissionEndDate  , BidSubmissionEndTime:bidSubmissionEndTime  , 
    PhysicalDocsSubmissionEndDate:physicalDocsSubmissionEndDate  ,  PhysicalDocsSubmissionEndTime:physicalDocsSubmissionEndTime  , BidOpeningStartDate: bidOpeningStartDate  ,
    BidOpeningStartTime:bidOpeningStartTime
  }; 
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/RFPNIT/UpdateRFPNIT',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}


getConsumptionYear(){  
 
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetConsumptionYear').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}
getVendorDetails(vendorId){  
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/EMD/ViewVendorDetails?id='+vendorId).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});
}
}





