import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DPServiceService {
  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }
  getDPList(){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/DP/GetList').pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });
  
  }
  getDPListByIndentId(indentId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/DP/GetListByIndentNo?indentId='+indentId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}

updateDPExtention(atnoteId,fstDPExtnStart,fstDPExtnEnd,fstExtnPBGStart,fstExtnPBGEnd,stDPExtnStart,stDPExtnEnd,stExtnPBGStart,stExtnPBGEnd,trDPExtnStart,trDPExtnEnd,trDPExtnPBGStart,trDPExtnPBGEnd)
{
  let body: any = {ATNoteId:atnoteId,fstDPExtnStart:fstDPExtnStart,fstDPExtnEnd:fstDPExtnEnd,fstExtnPBGStart:fstExtnPBGStart,fstExtnPBGEnd:fstExtnPBGEnd,stDPExtnStart:stDPExtnStart,stDPExtnEnd:stDPExtnEnd,stExtnPBGStart:stExtnPBGStart,stExtnPBGEnd:stExtnPBGEnd,trDPExtnStart:trDPExtnStart,trDPExtnEnd:trDPExtnEnd,trDPExtnPBGStart:trDPExtnPBGStart,trDPExtnPBGEnd:trDPExtnPBGEnd};  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/DPExten/Update',body,this.options).pipe(map(res => res.json())).subscribe(data => {		
      debugger;	
        this.data1=data;
        resolve(this.data1);			
    });

  });
}

addDP( cyear,indtno,dpletterNo ,dpDate ,Item ,fromdate ,todate,Qty,emdAmmount,accUnit,IsAWS)
{ 
  let body: any = {cyear:cyear,IndentId:indtno,dpletterNo:dpletterNo ,dpDate:dpDate ,ItemId:Item ,DeliveryPdFromDate:fromdate ,DeliveryPdToDate:todate,Qty:Qty,EMDAmount:emdAmmount,AcctUnit:accUnit,IsAWS:IsAWS };  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/DP/Create',body,this.options).pipe(map(res => res.json())).subscribe(data => {		
      debugger;	
        this.data1=data;
        resolve(this.data1);			
    });

  });
}

updateDP( dpId,indtno,dpletterNo ,dpDate ,Item ,fromdate ,todate,Qty,emdAmmount,accUnit,IsAWS)
{
  let body: any = {DeliveryPeriodId:dpId,IndentId:indtno,dpletterNo:dpletterNo ,dpDate:dpDate ,ItemId:Item ,DeliveryPdFromDate:fromdate ,DeliveryPdToDate:todate,Qty:Qty,EMDAmount:emdAmmount,AcctUnit:accUnit,IsAWS:IsAWS };  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/DP/UpdateDP',body,this.options).pipe(map(res => res.json())).subscribe(data => {		
      debugger;	
        this.data1=data;
        resolve(this.data1);			
    });

  });
}

removeDP(dpId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/DP/RemoveDP?id='+dpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}

verfiyDP(dpId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/DP/VerfiyDP?id='+dpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}

rejectDP(dpId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/DP/RejectDP?id='+dpId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}


}
