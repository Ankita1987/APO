import { Component } from '@angular/core';
import {MasterService} from '../../../services/Master.service';
import {DPServiceService} from '../../../services/dpservice.service';

@Component({
  templateUrl: 'AddDP.html'
})
export class AddDpComponent {
  indentResponse:any;
  itemResponse:any;
  consumYearResponse:any;
  acctUnitDDL:any;
  dpList:any;
  edit:any=0;

  cyear:any;
  indtno:any;
  dpletterNo:any;
  dpDate:any;
  Item:any;
  fromdate:any;
  todate:any;
  Qty:any;
  emdAmmount:any=0;
  accUnit:any;
  qtyType:any;
  qty20:any;
  qty50:any;
  IsAWS:any=0;
  dpId:any;
  constructor(public masterService:MasterService,private DPservice:DPServiceService) { 
    this.fillConsumpYearDroupDown();
    this.fillIndentDroupDown();
    this.fillItemDroupDown();
    this.getAcctUnit();
    this.getDPList();

  }
  fillIndentDroupDown()
  {
    this.masterService.getIndent().then((res) =>{
      this.indentResponse = res;
    })
  }

  fillItemDroupDown()
  {
    this.masterService.getItemMaster().then((res)=>{
      this.itemResponse = res;
    })
  }

  fillConsumpYearDroupDown()
  {
    this.masterService.getConsumptionYear().then((res)=>{
this.consumYearResponse = res;
    }
    )
  }

  getAcctUnit()  
  { 
    this.masterService.getAcctUnit().then((data) => {
    this.acctUnitDDL = data;     
  })
} 

removeDP(dpId)
{

  this.DPservice.removeDP(dpId).then((res)=>{
this.getDPList();
  })
}

verifyDP(dpId)
{
  this.DPservice.verfiyDP(dpId).then((res=>{
    this.getDPList();
  }))
}

Edit(Edit)
{
  this.edit=1;
  alert(JSON.stringify(Edit));

  this.indtno = Edit.indentId;
  this.dpletterNo = Edit.dpletterNo;
  this.dpDate = Edit.dpDate;
  this.Item = Edit.itemId;
  this.fromdate = Edit.deliveryPdFromDate;
  this.todate = Edit.deliveryPdToDate;
  this.Qty = Edit.qty;
  this.emdAmmount = Edit.emdAmount;
  this.accUnit = Edit.unitId;
  this.dpId = Edit.deliveryPeriodId;
}

updateDP()
{
  this.DPservice.updateDP(this.dpId,this.indtno,this.dpletterNo ,this.dpDate ,this.Item ,this.fromdate ,this.todate,this.Qty,this.emdAmmount,this.accUnit,this.IsAWS).then((res)=>
  {
    this.getDPList();
  })
}

rejectDP(dpId)
{
  this.DPservice.rejectDP(dpId).then((res=>{
    this.getDPList();
  }))
}

getDPList()  
{ 
  this.DPservice.getDPList().then((data) => {
  this.dpList = data;     
})
} 
  addNewDP()
  {
    this.DPservice.addDP( this.cyear,this.indtno,this.dpletterNo ,this.dpDate ,this.Item ,this.fromdate ,this.todate,this.Qty,this.emdAmmount,this.accUnit,this.IsAWS).then((res)=>
    {
      this.getDPList();
    })
  }

}
