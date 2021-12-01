// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { listofindentComponent } from './listofindent.component';

// Forms Component
import { listofdpComponent } from './listofdp.component';

import { CreateNITComponent } from './CreateNIT.component';
import { publishNITComponent } from './publishNIT.component';
import { TablesComponent } from './tables.component';
import {rfpComponent} from './rfp';
import {boqComponent} from './BOQ';
import {physicalDocuComponent} from './physicalDocu';
import {tecSummComponent} from './TECSumm';
import {fincialDocuComponent} from './finicalDocu';
import {releaseOfEMDComponent} from './releaseOfEMD';
import {createATNoteComponent} from './createATNote';
import {IssueATNoteComponent} from './IssueATNote';
import {PBGDetailsComponent} from './PBGDetails';
import {cancelationcompleteComponent} from './cancelationcomplete';
import {supplypostionComponent} from './supplypostion';
import {DPExtensionComponent} from './DPExtension';
import {ReportReturnComponent} from './ReportReturn';
import {VenderStatusComponent} from './VenderStatus';


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';
import {ItemVarietiesComponent} from  './ItemVarieties.component';
import {notificationComponent} from './notification.component';
import {AlertComponent} from './Alert.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
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
    listofindentComponent,
    listofdpComponent,
    CreateNITComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    ItemVarietiesComponent,
    notificationComponent,
    AlertComponent,
    publishNITComponent,
    rfpComponent,
    boqComponent,
    physicalDocuComponent,
    tecSummComponent,
    fincialDocuComponent,
    releaseOfEMDComponent,
    createATNoteComponent,
    IssueATNoteComponent,
    PBGDetailsComponent,
    cancelationcompleteComponent,
    supplypostionComponent,
    DPExtensionComponent,
    ReportReturnComponent,
    VenderStatusComponent
  ]
})
export class BaseModule { }
