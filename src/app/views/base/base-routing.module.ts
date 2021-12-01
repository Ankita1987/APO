import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { listofindentComponent } from './listofindent.component';
import { listofdpComponent } from './listofdp.component';
import { CreateNITComponent } from './CreateNIT.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';
import {ItemVarietiesComponent} from './ItemVarieties.component';
import {notificationComponent} from './notification.component';
import {AlertComponent} from './Alert.component';
import { publishNITComponent } from './publishNIT.component';
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



const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'technical',
        data: {
          title: 'Technical'
        },
        children: [
          {
            path: 'physicalDocu',
            component: physicalDocuComponent,
        data: {
          title: 'Physical Document'
        }
          },
          {
            path: 'tecSummary',
            component: tecSummComponent,
            data: {
              title: 'TEC Summary'
            }
          }
        ]
      },
      {
        path: 'ATNote',
        data: {
          title: 'AT Note'
        },
        children: [
          {
            path: 'createATNote',
            component: createATNoteComponent,
        data: {
          title: 'Create AT Note'
        }
          },
          {
            path: 'IssueATNote',
            component: IssueATNoteComponent,
            data: {
              title: 'Issue AT Note'
            }
          }
        ]
      },
      {
        path: 'postContractManagement',
        data: {
          title: 'Post Contract Management'
        },
        children: [
          {
            path: 'supplyPostion',
            component: supplypostionComponent,
        data: {
          title: 'supplyPostion'
        }
          },
          {
            path: 'dpExtention',
            component: DPExtensionComponent,
            data: {
              title: 'dpExtention'
            }
          }, {
            path: 'cancelationcompletion',
            component: cancelationcompleteComponent,
            data: {
              title: 'cancelation'
            }
          }
        ]
      },
     
      {
        path: 'rfp',
        component: rfpComponent,
        data: {
          title: 'RFP'
        }
      },
      {
        path: 'ReportReturn',
        component: ReportReturnComponent,
        data: {
          title: 'Report Return'
        }
      },
      {
        path: 'VenderStatus',
        component: VenderStatusComponent,
        data: {
          title: 'Vender Status'
        }
      },
      {
        path: 'pbgDetails',
        component: PBGDetailsComponent,
        data: {
          title: 'PBG Details'
        }
      },
      {
        path: 'boq',
        component: boqComponent,
        data: {
          title: 'BOQ'
        }
      },
      {
        path: 'fincialDocu',
        component: fincialDocuComponent,
        data: {
          title: 'FINANCIAL DOCUMENT'          
        }
      },
      {
        path: 'releaseOfEMD',
        component: releaseOfEMDComponent,
        data: {
          title: 'Release Of EMD'          
        }
      },
      {
        path: 'listofdp',
        component: listofdpComponent,
        data: {
          title: 'List of DP'
        }
      },
      {
        path: 'listofIndent',
        component: listofindentComponent,
        data: {
          title: 'List of Indent'
        }
      },
      {
        path: 'CreateNIT',
        component: CreateNITComponent,
        data: {
          title: 'Create NIT'
        }
      },
      {
        path: 'publishNIT',
        component: publishNITComponent,
        data: {
          title: 'Publish NIT'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'Alert',
        component: AlertComponent,
        data: {
          title: 'Alert'
        }
      },
      {
        path: 'ItemVarieties',
        component: ItemVarietiesComponent,
        data: {
          title: 'Item Varieties'
        }
      },
      {
        path: 'Notification',
        component: notificationComponent,
        data: {
          title: 'Notification'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
