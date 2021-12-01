import { Component,OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';
@Component({
  templateUrl: 'ViewItem.html'
})
export class ViewItemComponent {
data:any;
  constructor(private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
  ngOnInit() {  
    this.getItemMaster();  
    
  }
  
  getItemMaster(){
    this._masterService.getItemMaster().then((data) => {
      this.data = data;
     
    })   
  }
}
