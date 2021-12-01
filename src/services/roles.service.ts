import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }

  createRole(RoleName,Description)
  {
    //let data3:any =JSON.stringify({Role:Role,UserName:UserName,Email:Email,Rank:Rank,PersonnelNumber:PersonnelNumber,FullName:FullName,EstablishmentFull:EstablishmentFull,EstablishmentAbbreviation:EstablishmentAbbreviation,CreatedByIntId:CreatedByIntId,CreatedOn:CreatedOn,Superior:Superior,PhoneNumber:PhoneNumber}); 
    let body: any = {RoleName:RoleName,Description:Description};  

    return new Promise(resolve => {

			this.http.post('http://localhost:55183/api/account/Role/Create',body,this.options).pipe(map(res => res.json())).subscribe(data => {
			
					this.data1=data;
					resolve(this.data1);
			
			});

		});
  }

  getRoles(){
		return new Promise(resolve => {


        this.http.get('http://localhost:55183/api/account/Role/list').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });
			
			});


  }


  /// Test Code

  AddItemModel( ItemId, ItemName,Type,CategoryName,GroupId)
  { 
    let body: any = {ItemId:ItemId,ItemName:ItemName,Type:Type,CategoryName:CategoryName,GroupId:GroupId,};  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddItemMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});
  }




  GetItemMaster(){  
    		return new Promise(resolve => {
        this.http.get('http://localhost:55183/Master/GetItemMaster').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });			
    	});

  }



}
