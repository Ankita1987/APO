import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';



@Component({
  templateUrl: 'AddGroup.html'
})

export class AddGroupComponent  {  
  data:any;
  groupId:any;
  groupName:any; 
  add:any;
  update:any;
  
  
  constructor(private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
 
  ngOnInit() {  
    this.getGroupMaster();  
    this.add=true;
    this.update=false;
    
  }  

addGroupModel()
  { 
    debugger;  
    this._masterService.addGroupModel(this.groupId,this.groupName).then((data) => {
      this.data = data;
     this.clearModel();
     if(data["isSuccess"]==true)
     {
       alert("Group Added Successfully !")
     }
     else
     {
       alert("Error !!!!")
     }
     this.getGroupMaster();
    })
  }


  getGroupMaster(){
    debugger;
    this._masterService.getGroupMaster().then((data) => {
      this.data = data;
      this.add=true;
      this.update=false;
    })   
  }

  clearModel(){
    debugger;
    this.groupId = null;
    this.groupName =null;


  }


  editGroupMaster(groupId)
  {
    debugger;
    this._masterService.editGroupMaster(groupId).then((data) => {    
    this.data=data;
    console.log(data);
    this.groupId = data["groupId"];
    this.groupName = data["groupName"];
    this.add=false;
    this.update=true;
    
    });  

  }

  removeGroupMaster(groupId)
  {
    debugger;
    this._masterService.removeGroupMaster(groupId).then((data) => {    
    this.data=data;
    if(data["isSuccess"]==true)
    {
      alert("Group Remove Successfully !")
    }
    else
    {
      alert("Error !!!!")
    }
   
    this.getGroupMaster();
    });
  }
 
  updateGroupModel()
  { 
    debugger;  
    this._masterService.updateGroupModel(this.groupId,this.groupName).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
       alert("Group Update Successfully !")
     }
     else
     {
       alert("Error !!!!")
     }
     this.clearModel();
     this.getGroupMaster();
    })
  }

}
