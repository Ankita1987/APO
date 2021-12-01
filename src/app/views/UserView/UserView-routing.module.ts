import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Add New Content For APO
import { AddDpComponent } from './AddDP';
import { AddEMDComponent } from './AddEMD';



const routes: Routes = [
  
  {
    path: '',
    data: {
      title: ''
    },
    children: [    
      {
        path: 'DPManagement',
        data: {
          title: ''
        },
        children: [
          {
            path: 'AddDP',
            component: AddDpComponent,
        data: {
          title: 'Add DP'
        }
          },
          {
            path: 'AddEMD',
            component: AddEMDComponent,
            data: {
              title: 'Approve Indent'
            }
          }
          ,
          {
            path: 'ApproveItem',
            component: null,
            data: {
              title: 'Approve Item'
            }
          }
          ,
          {
            path: 'ApproveRegVendor',
            component: null,
            data: {
              title: 'Approve Reg Vendor'
            }
          }
          ,
          {
            path: 'ApproveUnRegVendor',
            component: null,
            data: {
              title: 'Approve UnReg Vendor'
            }
          }

          ,
          {
            path: 'ApproveUser',
            component: null,
            data: {
              title: 'Approve User'
            }
          }
          ,
          {
            path: 'VendorStatus',
            component: null,
            data: {
              title: 'Vendor Status'
            }
          },
          
          {
            path: 'ViewIndent',
            component: null,
            data: {
              title: 'View Indent'
            }
          }
          ,
          {
            path: 'ViewItem',
            component: null,
            data: {
              title: 'View Item'
            }
          }

          ,
          {
            path: 'ApproveNIT',
            component: null,
            data: {
              title: 'Approve NIT'
            }
          }        
          ,
          {
            path: 'ApproveRFP',
            component: null,
            data: {
              title: 'Approve RFP'
            }
          }  ,
          {
            path: 'ApproveBOQ',
            component: null,
            data: {
              title: 'Approve BOQ'
            }
          }

          ,
          {
            path: 'ApproveEMD',
            component: null,
            data: {
              title: 'Approve EMD'
            }
          }///ApproveATNoteList
          ,
          {
            path: 'ApproveATNoteList',
            component: null,
            data: {
              title: 'Approve ATNote List '
            }
          }
          ,
          {
            path: 'ApprovePBG',
            component: null,
            data: {
              title: 'Approve PBG '
            }
          } ,
          {
            path: 'ViewPBGDetails',
            component: null,
            data: {
              title: 'View PBG Details'
            }
          }
          ,
          {
            path: 'ApproveDPExtentions',
            component: null,
            data: {
              title: 'View PBG Details'
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
            component: null,
        data: {
          title: 'Create AT Note'
        }
          },
          {
            path: 'IssueATNote',
            component: null,
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
            component: null,
        data: {
          title: 'supplyPostion'
        }
          },
          {
            path: 'dpExtention',
            component: null,
            data: {
              title: 'dpExtention'
            }
          }, {
            path: 'cancelationcompletion',
            component: null,
            data: {
              title: 'cancelation'
            }
          }
        ]
      },     
      {
        path: 'rfp',
        component: null,
        data: {
          title: 'RFP'
        }
      },
      {
        path: 'ReportReturn',
        component: null,
        data: {
          title: 'Report Return'
        }
      },
      {
        path: 'VenderStatus',
        component: null,
        data: {
          title: 'Vender Status'
        }
      },
      {
        path: 'pbgDetails',
        component: null,
        data: {
          title: 'PBG Details'
        }
      },
      {
        path: 'boq',
        component: null,
        data: {
          title: 'BOQ'
        }
      },
      {
        path: 'fincialDocu',
        component: null,
        data: {
          title: 'FINANCIAL DOCUMENT'          
        }
      },
      {
        path: 'releaseOfEMD',
        component: null,
        data: {
          title: 'Release Of EMD'          
        }
      },
      {
        path: 'listofdp',
        component: null,
        data: {
          title: 'List of DP'
        }
      },
      {
        path: 'listofIndent',
        component: null,
        data: {
          title: 'List of Indent'
        }
      },
      {
        path: 'CreateNIT',
        component: null,
        data: {
          title: 'Create NIT'
        }
      },
      {
        path: 'publishNIT',
        component: null,
        data: {
          title: 'Publish NIT'
        }
      },
      {
        path: 'tables',
        component: null,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'Alert',
        component: null,
        data: {
          title: 'Alert'
        }
      },
      {
        path: 'ItemVarieties',
        component: null,
        data: {
          title: 'Item Varieties'
        }
      },
      {
        path: 'Notification',
        component: null,
        data: {
          title: 'Notification'
        }
      },
      {
        path: 'tabs',
        component: null,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: null,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: null,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: null,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: null,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: null,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: null,
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
export class UserViewRoutingModule {}
