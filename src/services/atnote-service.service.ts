import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ATNoteServiceService {
  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }

  getRfpDetail(rfpId){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/ATNote/GetRFPDetailbyId?rfpId='+rfpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });
  
  }


  getAtNoteByRfpId(rfpId){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/ATNote/getAtNoteByRfpId?rfpId='+rfpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });
  
  }

  deleteAtNote(atnoteId){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/ATNote/RemoveATNote?id='+atnoteId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });
  
  }

  getAtNoteDetailsById(atnoteId){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/ATNote/GetATNoteDetailbyId?id='+atnoteId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });
  
  }
  createATNote(DPLetterId,PBGFromDate,VendorId,pbgAmt,atNoteQty,contractvalue,totalcost,basiccost,vendorName,gst,rfpId,itemName,dpFDate,dpToDate,qty,status,ATFromDate,AtToDate,PBGsubDate,PBGToDate,ATNoteNo,LastUONo)
  {
    let body: any = {DeliveryPeriodId:DPLetterId,ValidityOfPBGFromDate:PBGFromDate,L1VendorId:VendorId,PBGAmount:pbgAmt,QTYATNote:atNoteQty,ContractValue:contractvalue,TotalRateIncludingRate:totalcost,BasicRate:basiccost,NameOfFirm:vendorName,GSTTaxes:gst,rfpId,ItemName:itemName,DeliveryPdFromDate:dpFDate,DeliveryPdToDate:dpToDate,Qty:qty,IsAccepted:status,DPStartDateInATNote:ATFromDate,DPEndDateInATNote:AtToDate,LastDateOfSubmmisionOfPBG:PBGsubDate,ValidityOfPBGToDate:PBGToDate,ATNoteNo:ATNoteNo,UONumber:LastUONo};  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/ATNote/CreateATNote',body,this.options).pipe(map(res => res.json())).subscribe(data => {		
      debugger;	
        this.data1=data;
        resolve(this.data1);			
    });

  });
  }
}
