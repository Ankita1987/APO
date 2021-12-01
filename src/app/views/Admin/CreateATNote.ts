import { Component } from '@angular/core';

import {RFPNITService} from '../../../services/RFPNIT.service';
import {ATNoteServiceService} from '../../../services/atnote-service.service';
import { from } from 'rxjs';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: 'CreateATNote.html'
})
export class CreateATNoteComponent {

rfpList:any;
data:any;
rfpId:any;
itemName:any;
dpFDate:any;
dpToDate:any;
qty:any;
status:boolean;
ATFromDate:any;
AtToDate:any;
PBGsubDate:any;
PBGFromDate:any;
PBGToDate:any;
ATNoteNo:any;
LastUONo:any;
vendorName:any;
gst:any=18;
basiccost:number;
totalcost:number;
contractvalue:number;
atNoteQty:number;
pbgAmt:number;
VendorId :any;
DPLetterId:any;

  constructor(public rfpServoce:RFPNITService,public atNoteService:ATNoteServiceService) {
this.getRfpList();

   }

   

   getRfpList()
   {
     this.rfpServoce.getRFPNIT().then((res)=>{
this.rfpList= res;
     })
   }
   onBasicCostChange(value)
   {
     this.totalcost=null;
     this.totalcost = +value + + (this.basiccost*this.gst/100);
     this.contractvalue = this.totalcost * this.atNoteQty;
     this.pbgAmt = this.contractvalue*10/100;

   }

   createATNote()
   {
      this.atNoteService.createATNote(this.DPLetterId,this.PBGFromDate,this.VendorId,this.pbgAmt,this.atNoteQty,this.contractvalue,this.totalcost,this.basiccost,this.vendorName,this.gst,this.rfpId,this.itemName,this.dpFDate,this.dpToDate,this.qty,this.status,this.ATFromDate,this.AtToDate,this.PBGsubDate,this.PBGToDate,this.ATNoteNo,this.LastUONo).then((res)=>{

      })
   }

   getRfpDetails()
   {
     this.atNoteService.getRfpDetail(this.rfpId).then((res)=>{
      //  this.data = res;
      //  alert(JSON.stringify(this.data));
      if(res!=null)
      {
       this.itemName = res["itemName"];
       this.dpFDate = res["deliveryPdFromDate"];
       this.dpToDate = res["deliveryPdToDate"];
       this.qty = res["qty"];
       this.VendorId = res["l1VendorId"];
       debugger;
       this.vendorName = res["nameOfFirm"];
       this.DPLetterId = res["deliveryPeriodId"];
      }
      else{
        this.itemName = null;
        this.dpFDate = null;
        this.dpToDate = null;
        this.qty = null;
        this.DPLetterId=null;
      }
     })
   }


}
