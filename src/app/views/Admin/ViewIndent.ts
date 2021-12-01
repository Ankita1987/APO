import { Component ,OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {MasterService} from '../../../services/Master.service';
import {AuthService} from '../../../services/auth.service';



@Component({
  templateUrl: 'ViewIndent.html'
})
export class ViewIndentComponent {
  data:any;
  constructor(private _masterService:MasterService, private loginService:LoginService,private authService:AuthService) { 

  }
  ngOnInit() {       
    this.getIndent()    
  }

  getIndent(){
   
    this._masterService.getIndent().then((data) => {
      this.data = data;     
    })   
  }
 
}
