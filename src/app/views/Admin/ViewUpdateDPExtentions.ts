import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ATNoteServiceService} from '../../../services/atnote-service.service';
import {DPServiceService} from '../../../services/dpservice.service';


@Component({
  templateUrl: 'ViewUpdateDPExtentions.html'
})
export class ViewUpdateDPExtentionsComponent {
data:any;
atnoteId:any;
fstDPExtnStart:any;
fstDPExtnEnd:any;
fstExtnPBGStart:any;
fstExtnPBGEnd:any;
stDPExtnStart:any;
stDPExtnEnd:any;
stExtnPBGStart:any;
stExtnPBGEnd:any;
trDPExtnStart:any;
trDPExtnEnd:any;
trDPExtnPBGStart:any;
trDPExtnPBGEnd:any;


  constructor(private dpservice:DPServiceService,private route: ActivatedRoute,private aTNoteService:ATNoteServiceService) { 
     this.data =  this.route.snapshot.paramMap.get('id');
this.aTNoteService.getAtNoteDetailsById(this.data).then((res)=>{
  this.data = res;
  console.log(JSON.stringify(this.data));

  this.fstDPExtnStart=this.data["fstDPExtnStart"];
  this.fstDPExtnEnd=this.data["fstDPExtnEnd"];
  this.fstExtnPBGStart=this.data["fstExtnPBGStart"];
  this.fstExtnPBGEnd=this.data["fstExtnPBGEnd"];
  this.stDPExtnStart=this.data["stDPExtnStart"];
  this.stDPExtnEnd=this.data["stDPExtnEnd"];
  this.stExtnPBGStart=this.data["stExtnPBGStart"];
  this.stExtnPBGEnd=this.data["stExtnPBGEnd"];
  this.trDPExtnStart=this.data["trDPExtnStart"];
  this.trDPExtnEnd=this.data["trDPExtnEnd"];
  this.trDPExtnPBGStart=this.data["trDPExtnPBGStart"];
  this.trDPExtnPBGEnd=this.data["trDPExtnPBGEnd"];
  this.atnoteId = this.data["atNoteId"];

})

  }


  updateDPExtention()
  {
    alert(this.atnoteId);
    this.dpservice.updateDPExtention(this.atnoteId,this.fstDPExtnStart,this.fstDPExtnEnd,this.fstExtnPBGStart,this.fstExtnPBGEnd,this.stDPExtnStart,this.stDPExtnEnd,this.stExtnPBGStart,this.stExtnPBGEnd,this.trDPExtnStart,this.trDPExtnEnd,this.trDPExtnPBGStart,this.trDPExtnPBGEnd).then((res)=>{

    })
  }



}
