// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Components Routing
import { OICAdminRoutingModule } from './OICAdmin-routing.module';
import { from } from 'rxjs';
import { ApproveDPComponent } from './ApproveDP';
import {ApproveIndentComponent } from './ApproveIndent';
import{ApproveItemComponent}from './ApproveItem';
import{ApproveRegVendorComponent}from './ApproveRegVendor';
import{ApproveUnRegVendorComponent}from './ApproveUnRegVendor';
import{ApproveUserComponent}from './ApproveUser';
import{NotificationComponent}from './Notification';
import{VendorStatusComponent}from './VendorStatus';
import{ViewIndentComponent}from './ViewIndent';
import{ViewItemComponent}from './ViewItem';
import { ApproveBOQComponent } from './ApproveBOQ';
import { ApproveRFPComponent } from './ApproveRFP';
import { ApproveNITComponent } from './ApproveNIT';
import { ApproveEMDComponent } from './ApproveEMD';
import { ApproveATNoteListComponent } from './ApproveATNoteList';
import { ApprovePBGComponent } from './ApprovePBG';
import { ViewPBGDetailsComponent } from './ViewPBGDetails';
import { ApproveDPExtentionsComponent } from './ApproveDPExtentions';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OICAdminRoutingModule,
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
    ApproveDPComponent,
    ApproveIndentComponent,
    ApproveItemComponent,
    ApproveRegVendorComponent,
    ApproveUnRegVendorComponent,
    ApproveUserComponent,
    NotificationComponent,
    VendorStatusComponent,
    ViewIndentComponent,
    ViewItemComponent,
    ApproveBOQComponent,
    ApproveRFPComponent,
    ApproveNITComponent,
    ApproveEMDComponent,
    ApproveATNoteListComponent,
    ApprovePBGComponent,
    ViewPBGDetailsComponent,
    ApproveDPExtentionsComponent

  ]
})
export class OICAdminModule { }
