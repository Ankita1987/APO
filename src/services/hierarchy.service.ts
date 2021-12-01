import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {

  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }



  // getUserHierarchy(){
	// 	return new Promise(resolve => {


  //       this.http.get('http://localhost:55183/api/account/Role/list').pipe(map(res => res.json())).subscribe(data => {
  //          this.data1 = data
  //           resolve(this.data1);
  //       });
			
	// 		});


  // }


}
