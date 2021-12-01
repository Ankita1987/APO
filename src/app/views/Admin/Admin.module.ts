// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AdminRoutingModule } from './Admin-routing.module';
import {EditRoleComponent} from './EditRole';
import {AddUserComponent} from './AddUser';
import {ResetUserComponent} from './ResetUser';
import {ViewUserComponent} from './ViewUser';
import { from } from 'rxjs';
import {subordinatesComponent} from './subordinates';
import {ChangePasswordComponent} from './changePassword';
import {forgotPasswordComponent} from './forgotPasswordRequest';
import { AddDpComponent } from './AddDP';
import { ViewDPComponent } from './ViewDP';
import { UpdateBiometrixComponent } from './Updatebiometrix';
import { AdditemComponent } from './Additem';
import { ViewItemComponent } from './ViewItem';
import { AddIndentComponent } from './AddIndent';
import { ViewIndentComponent } from './ViewIndent';
import { RegtVendorComponent } from './RegtVendor';
import { UnRegVendorComponent } from './UnRegVendor';
import { ViewNITComponent } from './ViewNIT';
import { ApproveDPComponent } from './ApproveDP';
import { VendorstatusComponent } from './Vendorstatus';
import { ListOfNITComponent } from './ListOfNIT';
import { ViewVendorsDetailsComponent } from './ViewVendorsDetails';
import { VendorListComponent } from './VendorList';
import { ListOfRFPComponent } from './ListOfRFP';
import { UploadBOQComponent } from './UploadBOQ';
import { AddEMDComponent } from './AddEMD';
import { ViewEMDComponent } from './ViewEMD';
import { SearchEMDComponent } from './SearchEMD';
import { TECSummaryComponent } from './TECSummary';
import { ReleaseForFeitOFEMDComponent } from './ReleaseForFeitOFEMD';
import { CreateATNoteComponent } from './CreateATNote';
import { ViewATNoteComponent } from './ViewATNote';
import { ListOfATNoteComponent } from './ListOfATNote';
import { ListOfPBGComponent } from './ListOfPBG';
import { ViewUpdatePBGDetailsComponent } from './ViewUpdatePBGDetails';
import { SupplyPositionComponent } from './SupplyPosition';
import { DPExtentionsComponent } from './DPExtentions';
import { ViewDPExtentionsComponent } from './ViewDPExtentions';
import { ViewUpdateDPExtentionsComponent } from './ViewUpdateDPExtentions';
import { ItemForUserComponent } from './ItemForUser';
import { CreateNITComponent } from './CreateNIT';
import { CreateRoleComponent } from './create-role.component';
import { NotificationComponent } from './Notification';
import { AddCategoryComponent } from './AddCategory';
import { AddGroupComponent } from './AddGroup';
import { AddVendorCertificateComponent } from './AddVendorCertificate';
import { AddVendorWareHouseComponent } from './AddVendorWareHouse';
//
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [     
    AddUserComponent,
    EditRoleComponent,   
    ResetUserComponent,
    ViewUserComponent,
    forgotPasswordComponent,
    subordinatesComponent,
    ChangePasswordComponent,
    CreateRoleComponent,   
    AddDpComponent,
    ViewDPComponent,   
    UpdateBiometrixComponent,
    AdditemComponent,
    ViewItemComponent,
    AddIndentComponent,
    ViewIndentComponent,
    RegtVendorComponent,
    UnRegVendorComponent,    
    ViewNITComponent,
    ApproveDPComponent,
    VendorstatusComponent,
    ListOfNITComponent,
    ViewVendorsDetailsComponent,
    VendorListComponent,
    ListOfRFPComponent,
    UploadBOQComponent,
    AddEMDComponent,
    ViewEMDComponent,
    SearchEMDComponent,
    TECSummaryComponent,
    ReleaseForFeitOFEMDComponent,
    CreateATNoteComponent,
    ViewATNoteComponent,
    ListOfATNoteComponent,
    ListOfPBGComponent,
    ViewUpdatePBGDetailsComponent,
    SupplyPositionComponent,
    DPExtentionsComponent,
    ViewDPExtentionsComponent,
    ViewUpdateDPExtentionsComponent,
    ItemForUserComponent,
    CreateNITComponent,
    NotificationComponent,
    AddCategoryComponent,
    AddGroupComponent,
    AddVendorCertificateComponent,
    AddVendorWareHouseComponent
  ]
})
export class AdminModule { }
