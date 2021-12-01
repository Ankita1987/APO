import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: 'AddVendorWareHouse.html'
})

export class AddVendorWareHouseComponent  {  
 
  itemDDL:any;
  data:any;
  add:any;
  update:any;

  vendorWareHouseId :any;
  vendorId:any;
  itemName:any;
  wareHouseAddress :any;
  storageCapacity :any;

  constructor(private route: ActivatedRoute,private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
 
  ngOnInit() {  
    debugger;
    //let id = this.route.snapshot.params[''];
    this.vendorId=this.route.snapshot.params['']
    this.getItemDDL();    
    this.getVendorWareHouse(this.vendorId);     
    this.add=true;
    this.update=false;
    
  }

  getItemDDL(){
    this._masterService.getItemMaster().then((data) => {
      this.itemDDL = data;
      this.add=true;
      this.update=false;
    })   
  }


  clearModel()
  {
    this.vendorWareHouseId=null;
    this.vendorId=null;
    this.itemName=null;
    this.wareHouseAddress =null;
    this.storageCapacity =null;
    this.add=true;
     this.update=false;
  
  }

  addVendorWareHouse()
  { 
   debugger;
    this._masterService.addVendorWareHouse(this.vendorId ,this.itemName,   this.wareHouseAddress,   this.storageCapacity).then((data) => {
      this.data = data;

     if(data["isSuccess"]==true)
     {
       debugger;
       alert(" Added Successfully !")       
       this.clearModel();
       //let id = this.route.snapshot.params[''];
       this.vendorId=this.route.snapshot.params['']
       this.getVendorWareHouse(this.vendorId);
     }
     else
     {
       alert("Error !!!!")
     }
     
    })
  }


  getVendorWareHouse(vendorId)
  {
    this._masterService.getVendorWareHouse(vendorId).then((data) => {
      this.data = data;
      this.add=true;
      this.update=false;
    })   
  }
  ////
  editVendorWareHouse(vendorWareHouseId)
  {    
    this._masterService.editVendorWareHouse(vendorWareHouseId).then((data) => {    
    this.data=data;
    console.log(data);

    this.vendorWareHouseId= data["vendorWareHouseId"];
    this.vendorId= data["vendorId"];
    this.itemName= data["itemName"];
    this.wareHouseAddress = data["wareHouseAddress"];
    this.storageCapacity = data["storageCapacity"]; 
    this.add=false;
    this.update=true;
    
    });  

  }

  removeVendorWareHouse(vendorWareHouseId)
  {    
    this._masterService.removeVendorWareHouse(vendorWareHouseId).then((data) => {    
    this.data=data;
    if(data["isSuccess"]==true)
    {
      alert("Remove Successfully !")
     // let id = this.route.snapshot.params[''];
      this.vendorId=this.route.snapshot.params['']
      this.getVendorWareHouse(this.vendorId);
      
    }
    else
    {
      alert("Error !!!!")
    }
   
  
    });
  }
 
  updateVendorWareHouse()
  {     
    this._masterService.updateVendorWareHouse(this.vendorWareHouseId,this.vendorId ,this.itemName,   this.wareHouseAddress,   this.storageCapacity).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
       alert("Update Successfully !")
       this.clearModel();
       //let id = this.route.snapshot.params[''];
       this.vendorId=this.route.snapshot.params[''];
       this.getVendorWareHouse(this.vendorId);
     }
     else
     {
       alert("Error !!!!")
     }
   
    })
  }

}



