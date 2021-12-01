import { Component } from '@angular/core';
import {RFPNITService} from '../../../services/RFPNIT.service';
import {ATNoteServiceService} from '../../../services/atnote-service.service';

@Component({
  templateUrl: 'ListOfATNote.html'
})
export class ListOfATNoteComponent {
  rfpList:any;
  atnotelist:any;
  constructor(public rfpServoce:RFPNITService,private atnoteservice:ATNoteServiceService) { 
    this.getRfpList();
  }
  getRfpList()
   {
     this.rfpServoce.getRFPNIT().then((res)=>{
this.rfpList= res;
     })
   }

   view(item) {
   alert(item);
    

  }

  delete(atnoteId,rfpId)
  {
    //alert(atnoteId+rfpId);
     this.atnoteservice.deleteAtNote(atnoteId).then((res)=>{
 this.getRfpDetails(rfpId);
     })
  }
  edit()
  {

  }
  
   getRfpDetails(id)
   {
     this.atnoteservice.getAtNoteByRfpId(id).then((res)=>{
console.log(JSON.stringify(res));
this.atnotelist = res;
     })
   }
}
