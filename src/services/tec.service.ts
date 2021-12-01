import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class tecService {

  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }


getRFPForTEC(cy){  
    		return new Promise(resolve => {
        this.http.get('http://localhost:55183/TEC/GetRFPForTEC?id='+cy).pipe(map(res => res.json())).subscribe(data => {
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



GetVendorForTEC(rfpid){  
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/TEC/GetVendorForTEC?id='+rfpid).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});
}

}





