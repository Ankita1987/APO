import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

	data1: any;
  userdata:{};
    
  headers: Headers;  
  options: RequestOptions;  
  constructor(public http: Http,) { 

    this.headers = new Headers({ 'Content-Type': 'text/plain' });  
    this.options = new RequestOptions({ headers: this.headers });

  }

  login(){
		return new Promise(resolve => {


        this.http.get('https://api.awpo.in/api/Values/getall').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data.Table
            resolve(this.data1);
        });
			
			});


  }

  
  checkLogin(){
		return new Promise(resolve => {


        this.http.get('http://localhost:55183/api/base/checkLogin?refreshToken='+sessionStorage.getItem("refresh_token")+'').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });
			
			});


  }

  resetPassword(Id){
		return new Promise(resolve => {


        this.http.get('http://localhost:55183/api/Account/resetPassword?Id='+Id+'').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });
			
			});


  }

  getSubordinates(){
		return new Promise(resolve => {


        this.http.get('http://localhost:55183/api/Account/subordinates?userId='+sessionStorage.getItem("userId")+'').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });
			
			});


  }

  getNotifications(){
		return new Promise(resolve => {


        this.http.get('http://localhost:55183/api/Account/notification').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });
			
			});


  }
  
  
  

  UserAuth(username,password){
    let body: string = "username="+username+"&password="+password+"&grant_type=password";  

    return new Promise(resolve => {

			this.http.post('http://localhost:55183/token',body,this.options).pipe(map(res => res.json())).subscribe(data => {
			
					this.data1=data;
					resolve(this.data1);
			
			});

		});


  }

  changePassword(newPass,currentPass,confirmPass){
    this.headers = new Headers({ 'Content-Type': 'application/json' ,'Authorization':'Bearer'+" "+sessionStorage.getItem("accessToken")});  
    this.options = new RequestOptions({ headers: this.headers });
    let body: any ={oldPassword:currentPass,newPassword:newPass,confirmPassword:confirmPass}  

    return new Promise(resolve => {

			this.http.post('http://localhost:55183/api/Account/ChangePassword',body,this.options).pipe(map(res => res.json())).subscribe(data => {
			
			
					resolve(data);
			
			});

		});


  }

  forgotPassword(userName){
    this.headers = new Headers({ 'Content-Type': 'application/json' ,'Authorization':'Bearer'+" "+sessionStorage.getItem("accessToken")});  
    this.options = new RequestOptions({ headers: this.headers });
    let body: any ={userName:userName,message:"Please Reset My Password",userId:sessionStorage.getItem("userId")}  

    return new Promise(resolve => {

			this.http.post('http://localhost:55183/api/Account/fogotPassword',body,this.options).pipe(map(res => res.json())).subscribe(data => {
			
			this.data1 = data
					resolve(this.data1);
			
			});

		});


  }
  
  UserRegistration(Password,Appointment,ASCON,Role,UserName,Email,Rank,PersonnelNumber,FullName,EstablishmentFull,EstablishmentAbbreviation,CreatedByIntId,CreatedOn,Superior,PhoneNumber)
  {
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
    //let data3:any =JSON.stringify({Role:Role,UserName:UserName,Email:Email,Rank:Rank,PersonnelNumber:PersonnelNumber,FullName:FullName,EstablishmentFull:EstablishmentFull,EstablishmentAbbreviation:EstablishmentAbbreviation,CreatedByIntId:CreatedByIntId,CreatedOn:CreatedOn,Superior:Superior,PhoneNumber:PhoneNumber}); 
    let body: any = {UserId:sessionStorage.getItem("userId"),ConfirmPassword:Password,Password:Password,Appointment:Appointment,ASCON:ASCON,Roles:Role,UserName:UserName,Email:Email,Rank:Rank,Number:PersonnelNumber,FullName:FullName,EstablishmentFull:EstablishmentFull,EstablishmentAbbreviation:EstablishmentAbbreviation,CreatedByIntId:CreatedByIntId,CreatedOn:CreatedOn,Superior:Superior,PhoneNumber:PhoneNumber};  

    return new Promise(resolve => {

			this.http.post('http://localhost:55183/api/account/register',body,this.options).pipe(map(res => res.json())).subscribe(data => {
			
					this.data1=data;
					resolve(this.data1);
			
			});

		});
  }


}
