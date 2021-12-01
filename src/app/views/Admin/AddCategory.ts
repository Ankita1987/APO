import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';



@Component({
  templateUrl: 'AddCategory.html'
})

export class AddCategoryComponent  {  
  data:any;
  categoryId:any;
  categoryName:any; 
  add:any;
  update:any;
  
  
  constructor(private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
 
  ngOnInit() {  
    this.getCategoryMaster();  
    this.add=true;
    this.update=false;
    
  }
  

  checklogin()
{
  return new Promise(resolve => {
  this.loginService.checkLogin().then((data)=>{

    if(data==true)
    {
      resolve(data);
    }
    else{
     this.authService.logout();
     resolve(data);
    }

  })
})

}

  

addCategoryModel()
  { 
    debugger;  
    this._masterService.addCategoryModel(this.categoryId,this.categoryName).then((data) => {
      this.data = data;
     this.clearModel();
     if(data["isSuccess"]==true)
     {
       alert("Category Added Successfully !")
     }
     else
     {
       alert("Error !!!!")
     }
     this.getCategoryMaster();
    })
  }


  getCategoryMaster(){
    debugger;
    this._masterService.getCategoryMaster().then((data) => {
      this.data = data;
      this.add=true;
      this.update=false;
    })   
  }

  clearModel(){
    debugger;
    this.categoryId = null;
    this.categoryName =null;


  }


  editCategoryMaster(categoryId)
  {
    debugger;
    this._masterService.editCategoryMaster(categoryId).then((data) => {    
    this.data=data;
    console.log(data);
    this.categoryId = data["categoryId"];
    this.categoryName = data["categoryName"];
    this.add=false;
    this.update=true;
    
    });  

  }

  removeCategoryMaster(categoryId)
  {
    debugger;
    this._masterService.removeCategoryMaster(categoryId).then((data) => {    
    this.data=data;
    if(data["isSuccess"]==true)
    {
      alert("Category Remove Successfully !")
    }
    else
    {
      alert("Error !!!!")
    }
   
    this.getCategoryMaster();
    });
  }
 
  updateCategoryModel()
  { 
    debugger;  
    this._masterService.updateCategoryModel(this.categoryId,this.categoryName).then((data) => {
      this.data = data;    
     if(data["isSuccess"]==true)
     {
       alert("Category Update Successfully !")
     }
     else
     {
       alert("Error !!!!")
     }
     this.clearModel();
     this.getCategoryMaster();
    })
  }

}
