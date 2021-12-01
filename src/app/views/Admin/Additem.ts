import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';



@Component({
  templateUrl: 'Additem.html'
})

export class AdditemComponent  {  
  data:any;
  ItemId:any;
  ItemName:any;
  Type:any;
  CategoryName:any;
  GroupId :any
  add:any;
  update:any;
  categoryDDL:any;
  groupDDL:any;
  
  
  constructor(private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
 
  ngOnInit() {  
    this.getItemMaster();  
    this.getCategoryDDL();     
    this.getGroupDDL();
    this.add=true;
    this.update=false;
    
  }
   

addItemModel()
  { 
   
    this._masterService.addItemModel(this.ItemId,this.ItemName,this.Type,this.CategoryName,this.GroupId).then((data) => {
      this.data = data;
     this.clearModel();
     if(data["isSuccess"]==true)
     {
       alert("Item Added Successfully !")
       this.clearModel();
       this.getItemMaster();
     }
     else
     {
       alert("Error !!!!")
     }
     
    })
  }


  getItemMaster(){
    this._masterService.getItemMaster().then((data) => {
      this.data = data;
      this.add=true;
      this.update=false;
    })   
  }

  clearModel(){    
    this.ItemName = null;
    this.Type = null;
    this.CategoryName = null;
    this.GroupId=null;
    this.add=true;
    this.update=false;
  }


  editItemMaster(itemId)
  {    
    this._masterService.editItemMaster(itemId).then((data) => {    
    this.data=data;
    console.log(data);
    this.ItemId = data["itemId"];
    this.ItemName = data["itemName"];
    this.Type = data["type"];
    this.CategoryName = data["categoryName"];
    this.GroupId=data["groupId"];
    this.add=false;
    this.update=true;
    
    });  

  }

  removeItemMaster(itemId)
  {    
    this._masterService.removeItemMaster(itemId).then((data) => {    
    this.data=data;
    if(data["isSuccess"]==true)
    {
      alert("Item Remove Successfully !")
      this.clearModel();
      this.getItemMaster();
    }
    else
    {
      alert("Error !!!!")
    }
   
    
    });
  }
 
  updateItemModel()
  {     
    this._masterService.updateItemModel(this.ItemId,this.ItemName,this.Type,this.CategoryName,this.GroupId).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
       alert("Item Update Successfully !")
       this.clearModel();
       this.getItemMaster();
     }
     else
     {
       alert("Error !!!!")
     }
 
    })
  }


  getCategoryDDL()
  {
    this._masterService.getCategoryMaster().then((data) => {
      this.categoryDDL = data;
     
    })  
  }


  getGroupDDL()
  {   
    this._masterService.getGroupMaster().then((data) => {
      this.groupDDL = data;
     
    })  
  }


}
