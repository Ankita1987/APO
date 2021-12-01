import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EMDService {

  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }



  addEMD(rfpId,vendorId,tenderFee,emdApplicable,emdAmountRecd,fdrbgNumber, validityOFFDRBGFromDate,validityOFFDRBGToDate)
  { 
    let body: any = { RFPId:rfpId,VendorId: vendorId,TenderFee:tenderFee,EMDApplicable:emdApplicable,EMDAmountRecd:   emdAmountRecd ,FDRBGNumber:    fdrbgNumber,ValidityOFFDRBGFromDate:validityOFFDRBGFromDate    ,  ValidityOFFDRBGToDate:  validityOFFDRBGToDate  };  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/EMD/AddEMD',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
getEMD(){  
    		return new Promise(resolve => {
        this.http.get('http://localhost:55183/EMD/GetEMD').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });			
    	});

}
editEMD(emdId)
{  
     return new Promise(resolve => {
    this.http.get('http://localhost:55183/EMD/EditEMD?id='+emdId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
removeEMD(emdId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/EMD/RemoveEMD?id='+emdId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
updateEMD(emdId, rfpId,vendorId,tenderFee,emdApplicable,emdAmountRecd,fdrbgNumber, validityOFFDRBGFromDate,validityOFFDRBGToDate)
{ 
  let body: any = {EmdId:emdId,RFPId:rfpId, VendorId: vendorId,TenderFee:tenderFee,EMDApplicable:emdApplicable,EMDAmountRecd:   emdAmountRecd ,FDRBGNumber:    fdrbgNumber,ValidityOFFDRBGFromDate:validityOFFDRBGFromDate    ,  ValidityOFFDRBGToDate:  validityOFFDRBGToDate  }; 
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/EMD/UpdateEMD',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
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

//GetEMDDetailsForForfiet

editEMDDetailsForForfiet(emdId)
{  
     return new Promise(resolve => {
    this.http.get('http://localhost:55183/EMD/GetEMDDetailsForForfiet?id='+emdId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });
}



releaseForfietEMD(emdId,releaseEMD,releaseEMDDate,reasonReleaseEMD)
{
  let body: any = {EmdId:emdId,ReleaseEMD:releaseEMD,ReleaseEMDDate:releaseEMDDate,ReasonReleaseEMD:reasonReleaseEMD }; 
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/EMD/ReleaseForfietEMD',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });
  });
}

}





