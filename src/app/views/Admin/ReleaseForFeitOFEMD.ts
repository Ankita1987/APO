import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {EMDService} from '../../../services/EMD.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { strict } from 'assert';
@Component({
  templateUrl: 'ReleaseForFeitOFEMD.html'
})
export class ReleaseForFeitOFEMDComponent {

    emdId:any;
    data:any;
    releaseEMD:any;
    releaseEMDDate:any;
    reasonReleaseEMD:any;
    rfdata:any;
    showRelease:any;
    showForfeit:any;
  

  constructor(private route: ActivatedRoute,  private router:Router,private _emdService:EMDService, private loginService:LoginService,private authService:AuthService) { 
  } 
  ngOnInit() {     
    this.emdId=this.route.snapshot.params[''];
    debugger;
    this.getEMDDetailsForForfiet(this.emdId);
    this.rfdata=[    
      {                
        "name": "Release"    
      },    
      {  
       
        "name": "Forfeit"    
      }    
    ]  
  }
  getEMDDetailsForForfiet(emdId)
  {   
    debugger;
      this._emdService.editEMDDetailsForForfiet(emdId).then((data) => {
      this.data = data;        
     

      if(this.data["releaseEMD"]=="Release")
      {
         this.showRelease=false;       
      }
      else
      {
        this.showRelease=true;
        this.releaseEMD=null;
        this.releaseEMDDate=null;
        this.reasonReleaseEMD=null;
        
      }
      if(this.data["forfeitEMD"]=="Forfeit" )
      {     
         this.showForfeit=false;        
      }
      else
      {
        this.showForfeit=true;
        this.releaseEMD=null;
        this.releaseEMDDate=null;
        this.reasonReleaseEMD=null;
      }
      
    })   
  }
  clearModel()
  {
    this.releaseEMD=null;
    this.releaseEMDDate=null;
    this.reasonReleaseEMD=null;
  }

  releaseForFeitOFEMD(str)
  {
    debugger
    this.releaseEMD=str;
    this._emdService.releaseForfietEMD(this.emdId,this.releaseEMD,this.releaseEMDDate,this.reasonReleaseEMD).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
      this.clearModel();   
      this.router.navigate(['/Admin/EMDManagement/ViewEMD']);  
       alert("Release/ Forfeit Successfully !")          
     }
     else
     {
       alert("Error !!!!")
     }
 
    })
  }



}
