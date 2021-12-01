import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  data1:any;
  headers: Headers;  
  options: RequestOptions;  

  constructor(public http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });  
    this.options = new RequestOptions({ headers: this.headers });
  }
  /// Test Code

addItemModel( ItemId, ItemName,Type,CategoryName,GroupId)
  { 
    let body: any = {ItemId:ItemId,ItemName:ItemName,Type:Type,CategoryName:CategoryName,GroupId:GroupId,};  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddItemMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
getItemMaster(){  
    		return new Promise(resolve => {
        this.http.get('http://localhost:55183/Master/GetItemMaster').pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });			
    	});

}
editItemMaster(ItemId){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/EditItemMaster?id='+ItemId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
removeItemMaster(itemid)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveItemMaster?id='+itemid).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
updateItemModel( ItemId, ItemName,Type,CategoryName,GroupId)
{ 
  let body: any = {ItemId:ItemId,ItemName:ItemName,Type:Type,CategoryName:CategoryName,GroupId:GroupId,};  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/Master/UpdateItemMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}



////////////////Category
getCategoryMaster(){  
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetCategoryMaster').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}
editCategoryMaster(categoryId){  

  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/EditCategoryMaster?id='+categoryId).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}

addCategoryModel( categoryId, categoryName)
  { 
    let body: any = {CategoryId:categoryId,CategoryName:categoryName};  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddCategoryMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
updateCategoryModel( categoryId, categoryName)
{ 
  let body: any = {CategoryId:categoryId,CategoryName:categoryName};  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/Master/UpdateCategoryMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}
removeCategoryMaster(categoryId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveCategoryMaster?id='+categoryId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}


///

////////////////Group
getGroupMaster(){  
 
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetGroupMaster').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}
editGroupMaster(groupId){  
  
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/EditGroupMaster?id='+groupId).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}

addGroupModel(groupId, groupName)
  { 
    let body: any = {GroupId:groupId,GroupName:groupName};  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddGroupMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
updateGroupModel(groupId, groupName)
  { 
    let body: any = {GroupId:groupId,GroupName:groupName};   
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/Master/UpdateGroupMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}
removeGroupMaster(groupId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveGroupMaster?id='+groupId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}


getConsumptionYear(){  
 
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetConsumptionYear').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}


getAcctUnit(){  
 
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetAcctUnitMaster').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}
///////////////////file Upload

// fileChange(event)
//   {
//     debugger;
//     let fileList: FileList = event.target.files;  
//     if (fileList.length > 0) { 
//       let file: File = fileList[0]; 
//       let formData: FormData = new FormData();  
//       formData.append('uploadFile', file, file.name);  
//       return new Promise(resolve => {      
//         this.http.post('http://localhost:55183/Master/UploadJsonFile',formData,this.options).pipe(map(res => res.json()))            
    
//       });
      
//   }
// }

//////////////////////////////////////////////IndentMaster

getIndent(){  
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetIndentMaster').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}
editIndent(indentId){  

  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/EditIndentMaster?id='+indentId).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}


addIndent( indentId,indentNo,indentDate ,consumptionYear ,acctUnit ,sanctionedQty ,estimatedRatePerAcctUnit)
  { 
    let body: any = {IndentId:indentId,IndentNo:indentNo,IndentDate:indentDate,ConsumptionYear:consumptionYear,AcctUnit :acctUnit,SanctionedQty:sanctionedQty,EstimatedRatePerAcctUnit:estimatedRatePerAcctUnit    };  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddIndentMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
updateIndent( indentId,indentNo,indentDate ,consumptionYear ,acctUnit ,sanctionedQty ,estimatedRatePerAcctUnit)
{ 
  let body: any = {IndentId:indentId,IndentNo:indentNo,IndentDate:indentDate,ConsumptionYear:consumptionYear,AcctUnit :acctUnit,SanctionedQty:sanctionedQty,EstimatedRatePerAcctUnit:estimatedRatePerAcctUnit    };  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/Master/UpdateIndentMaster',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}
removeIndent(indentId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveIndentMaster?id='+indentId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}

///////////////////////////////////Vendor
getVendor(){  
 
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/GetVendorBasicDetails').pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}

addVendor( vendorId,nameOfFirm ,isRegister,isMSME ,  registerWithAPO ,gstNumber, remarks )
  { 
    let body: any = {VendorId:vendorId,NameOfFirm:nameOfFirm ,IsRegister:isRegister,IsMSME:isMSME ,  RegisterWithAPO: registerWithAPO ,GSTNumber:gstNumber,Remarks: remarks  };  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddVendorBasicDetails',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}


editVendor(vendorId){  

  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/EditVendorBasicDetails?id='+vendorId).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}


updateVendor( vendorId,nameOfFirm ,isRegister,isMSME ,  registerWithAPO ,gstNumber, remarks )
{ 
  debugger;
  let body: any = {VendorId:vendorId,NameOfFirm:nameOfFirm ,IsRegister:isRegister,IsMSME:isMSME ,  RegisterWithAPO: registerWithAPO ,GSTNumber:gstNumber,Remarks: remarks  };  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/Master/UpdateVendorBasicDetails',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}
removeVendor(vendorId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveVendorBasicDetails?id='+vendorId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
addVendorCertificate( vendorId,registrationValidityWithAPOFromDate , registrationValidityWithAPOToDate ,  productionCapacityPerMonthAsPerFSSAI,
  fssaiCertificateNumber ,  validityOfFSSAICertificateFromDate ,  validityOfFSSAICertificateToDate ,  isohaccpCertificateNumber ,
  validityOfISOHACCPCertificateNumberFromDate ,  validityOfISOHACCPCertificateNumberToDate ,  technicalInspectionReport ,
  validityOfTechnicalInspectionReportFromDate,  validityOfTechnicalInspectionReportToDate ,  hygieneInspectionReport ,
  validityOfHygieneInspectionReportFromDate ,  validityOfHygieneInspectionReportToDate ,  tradeMarkCertificateNumber ,
  validityOfTradeMarkCertificateNumberFromDate ,  validityOfTradeMarkCertificateNumberToDate )
  { 
    let body: any = {
      VendorId:vendorId, RegistrationValidityWithAPOFromDate:registrationValidityWithAPOFromDate  , 
      RegistrationValidityWithAPOToDate:registrationValidityWithAPOToDate , ProductionCapacityPerMonthAsPerFSSAI :productionCapacityPerMonthAsPerFSSAI , FSSAICertificateNumber:fssaiCertificateNumber
        , ValidityOfFSSAICertificateFromDate:validityOfFSSAICertificateFromDate  ,
     ValidityOfFSSAICertificateToDate :validityOfFSSAICertificateToDate ,  ISOHACCPCertificateNumber:isohaccpCertificateNumber  ,
     ValidityOfISOHACCPCertificateNumberFromDate:validityOfISOHACCPCertificateNumberFromDate  ,     
     ValidityOfISOHACCPCertificateNumberToDate: validityOfISOHACCPCertificateNumberToDate ,     TechnicalInspectionReport :technicalInspectionReport ,
     ValidityOfTechnicalInspectionReportFromDate :validityOfTechnicalInspectionReportFromDate ,  ValidityOfTechnicalInspectionReportToDate :validityOfTechnicalInspectionReportToDate ,
     HygieneInspectionReport :hygieneInspectionReport , ValidityOfHygieneInspectionReportFromDate :validityOfHygieneInspectionReportFromDate ,     ValidityOfHygieneInspectionReportToDate:validityOfHygieneInspectionReportToDate  ,
     TradeMarkCertificateNumber:tradeMarkCertificateNumber  ,
     ValidityOfTradeMarkCertificateNumberFromDate :validityOfTradeMarkCertificateNumberFromDate ,
     ValidityOfTradeMarkCertificateNumberToDate:validityOfTradeMarkCertificateNumberToDate
     };  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddVendorCertificate',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
getVendorCertificate(vendorId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/GetVendorCertificate?id='+vendorId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
editVendorCertificate(vendorCertificationId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/EditVendorCertificate?id='+vendorCertificationId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}


updateVendorCertificate(vendorCertificationId,vendorId,registrationValidityWithAPOFromDate , registrationValidityWithAPOToDate ,  productionCapacityPerMonthAsPerFSSAI,
  fssaiCertificateNumber ,  validityOfFSSAICertificateFromDate ,  validityOfFSSAICertificateToDate ,  isohaccpCertificateNumber ,
  validityOfISOHACCPCertificateNumberFromDate ,  validityOfISOHACCPCertificateNumberToDate ,  technicalInspectionReport ,
  validityOfTechnicalInspectionReportFromDate,  validityOfTechnicalInspectionReportToDate ,  hygieneInspectionReport ,
  validityOfHygieneInspectionReportFromDate ,  validityOfHygieneInspectionReportToDate ,  tradeMarkCertificateNumber ,
  validityOfTradeMarkCertificateNumberFromDate ,  validityOfTradeMarkCertificateNumberToDate )
  { 
    let body: any = {VendorCertificationId:vendorCertificationId,
      VendorId:vendorId, RegistrationValidityWithAPOFromDate:registrationValidityWithAPOFromDate  , 
      RegistrationValidityWithAPOToDate:registrationValidityWithAPOToDate , ProductionCapacityPerMonthAsPerFSSAI :productionCapacityPerMonthAsPerFSSAI , FSSAICertificateNumber:fssaiCertificateNumber
        , ValidityOfFSSAICertificateFromDate:validityOfFSSAICertificateFromDate  ,
     ValidityOfFSSAICertificateToDate :validityOfFSSAICertificateToDate ,  ISOHACCPCertificateNumber:isohaccpCertificateNumber  ,
     ValidityOfISOHACCPCertificateNumberFromDate:validityOfISOHACCPCertificateNumberFromDate  ,     
     ValidityOfISOHACCPCertificateNumberToDate: validityOfISOHACCPCertificateNumberToDate ,     TechnicalInspectionReport :technicalInspectionReport ,
     ValidityOfTechnicalInspectionReportFromDate :validityOfTechnicalInspectionReportFromDate ,  ValidityOfTechnicalInspectionReportToDate :validityOfTechnicalInspectionReportToDate ,
     HygieneInspectionReport :hygieneInspectionReport , ValidityOfHygieneInspectionReportFromDate :validityOfHygieneInspectionReportFromDate ,     ValidityOfHygieneInspectionReportToDate:validityOfHygieneInspectionReportToDate  ,
     TradeMarkCertificateNumber:tradeMarkCertificateNumber  ,
     ValidityOfTradeMarkCertificateNumberFromDate :validityOfTradeMarkCertificateNumberFromDate ,
     ValidityOfTradeMarkCertificateNumberToDate:validityOfTradeMarkCertificateNumberToDate
     };  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/UpdateVendorCertificate',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
removeVendorCertificate(vendorCertificationId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveVendorCertificate?id='+vendorCertificationId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
/////////////////////////Ware House///////////////////////

addVendorWareHouse(vendorId ,itemName,   wareHouseAddress,   storageCapacity )
  { 
    let body: any = {VendorId:vendorId,ItemName:itemName,WareHouseAddress:wareHouseAddress,StorageCapacity:storageCapacity};  
    return new Promise(resolve => {      
			this.http.post('http://localhost:55183/Master/AddVendorWareHouse',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
					this.data1=data;
					resolve(this.data1);			
			});

		});

}
getVendorWareHouse(vendorId){  
    		return new Promise(resolve => {
        this.http.get('http://localhost:55183/Master/GetVendorWareHouse?id='+vendorId).pipe(map(res => res.json())).subscribe(data => {
           this.data1 = data
            resolve(this.data1);
        });			
    	});

}
editVendorWareHouse(vendorWareHouseId){  
 
    return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/EditVendorWareHouse?id='+vendorWareHouseId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
removeVendorWareHouse(vendorWareHouseId)
{
  return new Promise(resolve => {
    this.http.get('http://localhost:55183/Master/RemoveVendorWareHouse?id='+vendorWareHouseId).pipe(map(res => res.json())).subscribe(data => {
       this.data1 = data
        resolve(this.data1);
    });			
  });

}
updateVendorWareHouse(vendorWareHouseId,vendorId ,itemName,   wareHouseAddress,   storageCapacity)
{ 
  let body: any = {VendorWareHouseId:vendorWareHouseId,VendorId:vendorId,ItemName:itemName,WareHouseAddress:wareHouseAddress,StorageCapacity:storageCapacity};  
  return new Promise(resolve => {      
    this.http.post('http://localhost:55183/Master/UpdateVendorWareHouse',body,this.options).pipe(map(res => res.json())).subscribe(data => {			
        this.data1=data;
        resolve(this.data1);			
    });

  });
}


getVendorDetails(vendorId){  
  return new Promise(resolve => {
  this.http.get('http://localhost:55183/Master/ViewVendorDetails?id='+vendorId).pipe(map(res => res.json())).subscribe(data => {
     this.data1 = data
      resolve(this.data1);
  });			
});

}

}





