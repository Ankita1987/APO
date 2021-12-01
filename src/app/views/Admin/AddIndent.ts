import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
//import { Http, RequestOptions, Headers, Response } from '@angular/http'; 
//import { Observable, of } from 'rxjs';
//import { map } from 'rxjs/operators';





@Component({
  templateUrl: 'AddIndent.html'
})
export class AddIndentComponent {
  add:any;
  update:any;
  consumptionYearDDL:any;
  acctUnitDDL:any;
  data:any;
  indentId :any;
  indentNo :any;
  indentDate :any;
  consumptionYear :any;
  acctUnit :any;
  sanctionedQty :any;
  estimatedRatePerAcctUnit :any;
  uploadIndentPath :any;


  constructor(private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
 
  ngOnInit() {  
   
    this.getConsumptionYear();   
   
    this.getIndent()
    this. getAcctUnit() 
    this.clearModel();
    this.add=true;
    this.update=false;
    
  }
  getConsumptionYear(){
    this._masterService.getConsumptionYear().then((data) => {
      this.consumptionYearDDL = data;     
    })   
  }

  getAcctUnit()  
  { 
    this._masterService.getAcctUnit().then((data) => {
    this.acctUnitDDL = data;     
  }) 

  }

  clearModel(){    
    this.indentId=null;
    this.indentNo=null;
    this.indentDate=null;
    this.consumptionYear=null;
    this.acctUnit=null;
    this.sanctionedQty=null;
    this.estimatedRatePerAcctUnit=null;
    this.uploadIndentPath=null;
  }
    
  getIndent(){
   
    this._masterService.getIndent().then((data) => {
      this.data = data;
      this.add=true;
      this.update=false;
    })   
  }
  addIndent()
  {
   
    this._masterService.addIndent(this.indentId,this.indentNo,this.indentDate ,this.consumptionYear ,this.acctUnit ,this.sanctionedQty ,this.estimatedRatePerAcctUnit).then((data) => {
      this.data = data;
     this.clearModel();
     if(data["isSuccess"]==true)
     {
       alert("Item Added Successfully !")
     }
     else
     {
       alert("Error !!!!")
     }
     this.getIndent();
    })
  }

  editIndent(indentId)
  {    
    
    this._masterService.editIndent(indentId).then((data) => {    
    this.data=data;   
    this.indentId=data["indentId"];
    this.indentNo=data["indentNo"];
    this.indentDate=data["indentDate"];
    this.consumptionYear=data["consumptionYear"];
    this.acctUnit=data["acctUnit"];
    this.sanctionedQty=data["sanctionedQty"];
    this.estimatedRatePerAcctUnit=data["estimatedRatePerAcctUnit"];
    this.uploadIndentPath=data["uploadIndentPath"];
    this.add=false;
    this.update=true;
    
    });  

  }

  removeIndent(indentId)
  {    
    this._masterService.removeIndent(indentId).then((data) => {    
    this.data=data;
    if(data["isSuccess"]==true)
    {
      alert("Item Remove Successfully !")
    }
    else
    {
      alert("Error !!!!")
    }
   
    this.getIndent();
    });
  }
 
  updateIndent()
  {     
   
    this._masterService.updateIndent(this.indentId,this.indentNo,this.indentDate ,this.consumptionYear ,this.acctUnit ,this.sanctionedQty ,this.estimatedRatePerAcctUnit).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
       alert("Item Update Successfully !")
     }
     else
     {
       alert("Error !!!!")
     }
     this.clearModel();
     this.getIndent();
    })
  }





  // fileChange(event)
  // {
  //   debugger;
  //   this._masterService.fileChange(event).then((data) => {
  //     this.data = data;    
  //    if(data["isSuccess"]==true)
  //    {
  //      alert("File Upload Successfully !")
  //    }
  //    else
  //    {
  //      alert("Error !!!!")     }
    
  //   })
  // }
  
  
  
    

}
