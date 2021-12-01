import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditRoleComponent} from './EditRole';
import {AddUserComponent} from './AddUser';
import {ResetUserComponent} from './ResetUser';
import {ViewUserComponent} from './ViewUser';
import {RegisterComponent} from './register.component';
import { AuthGuard } from '../../../services/auth.guard';
import {CreateRoleComponent} from './create-role.component';
import {subordinatesComponent} from './subordinates';
import {ChangePasswordComponent} from './changePassword';
import {forgotPasswordComponent} from './forgotPasswordRequest';
import {NotificationComponent} from './Notification';
//


// Add New Content For APO
import { AddDpComponent } from './AddDP';
import { ViewDPComponent } from './ViewDP';
import { UpdateBiometrixComponent } from './Updatebiometrix';
import { AdditemComponent } from './Additem';
import { ViewItemComponent } from './ViewItem';
import { AddIndentComponent } from './AddIndent';
import { ViewIndentComponent } from './ViewIndent';
import { RegtVendorComponent } from './RegtVendor';
import { UnRegVendorComponent } from './UnRegVendor';
import { CreateNITComponent } from './CreateNIT';
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
import { AddCategoryComponent } from './AddCategory';

import { AddGroupComponent } from './AddGroup';
import {AddVendorCertificateComponent } from './AddVendorCertificate';
import {AddVendorWareHouseComponent } from './AddVendorWareHouse';

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
            path: 'ViewDP',
            component: ViewDPComponent,
            data: {
              title: 'ViewDP'
            }
          }
         
        ]
      },
      {
        path: 'UserManagement',
        data: {
          title: 'UserManagement'
        },
        children: [
          {
            path: 'AddUser',
            component: AddUserComponent,
            data: {
              title: 'Add User'
            }
          },
          {
            path: 'ViewUser',
            component: ViewUserComponent,
            data: {
              title: 'View User'
            }
          },
          {
            path: 'EditRole',
            component: EditRoleComponent,
            data: {
              title: 'Edit Role'
            }
          },
          {
            path: 'UpdateBiometrix',
            component: UpdateBiometrixComponent,
            data: {
              title: 'Update Biometrics'
            }
          }
          ,
          {
            path: 'ResetUser',
            component: ResetUserComponent,
            data: {
              title: 'Reset User'
            }
          }
          ,
          {
            path: 'subordinates',
            component: subordinatesComponent,
            data: {
              title: 'subordinates'
            }
          }
          ,
          {
            path: 'ChangePassword',
            component: ChangePasswordComponent,
            data: {
              title: 'ChangePassword'
            }
          },
          
          {
            path: 'Notification',
            component: NotificationComponent,
            data: {
              title: 'Notification'
            }
          },
          //
          
          {
            path: 'CreateRole',
            component: CreateRoleComponent,
            data: {
              title: 'CreateRole'
            }
          }
        ]
      },
      {
              path: 'VendorManagement',
              data: {
                title: 'VendorManagement'
              },
              children: [
                {
                  path: 'RegtVendor',
                  component: RegtVendorComponent,
                  data: {
                    title: 'RegtVendor'
                  }
                },
                {
                  path: 'AddVendorCertificate/:',
                  component: AddVendorCertificateComponent,
                  data: {
                    title: 'AddVendorCertificate'
                  }
                },
                {
                  path: 'AddVendorWareHouse/:',
                  component: AddVendorWareHouseComponent,
                  data: {
                    title: 'AddVendorWareHouse'
                  }
                },
                // {
                //   path: 'Test',
                //   component: TestComponent,
                //   data: {
                //     title: 'Test'
                //   }
                // },
      
                {
                  path: 'UnRegVendor',
                  component: UnRegVendorComponent,
                  data: {
                    title: 'UnRegVendor'
                  }
                }
                ,
      
                {
                  path: 'VendorList',
                  component: VendorListComponent,
                  data: {
                    title: 'Vendor Of List'
                  }
                }
                ,
      
                {
                  path: 'ViewVendorsDetails/:',
                  component: ViewVendorsDetailsComponent,
                  data: {
                    title: 'View Vendors Details'
                  }
                },
                {
                  path: 'Vendorstatus',
                  component: VendorstatusComponent,
                  data: {
                    title: 'Vender Status'
                  }
                }
              ]
      },
      {
              path: 'ItemManagement',
              data: {
                title: 'ItemManagement'
              },
              children: [
                {
                  path: 'Additem',
                  component: AdditemComponent,
                  data: {
                    title: 'Additem'
                  }
                },
      
                {
                  path: 'ViewItem',
                  component: ViewItemComponent,
                  data: {
                    title: 'ViewItem'
                  }
                },
                {
                  path: 'ItemForUser',
                  component: ItemForUserComponent,
                  data: {
                    title: 'ItemForUser'
                  }
                }
      
              ]
      },
      {
              path: 'IndentManagement',
              data: {
                title: 'IndentManagement'
              },
              children: [
                {
                  path: 'AddIndent',
                  component: AddIndentComponent,
                  data: {
                    title: 'AddIndent'
                  }
                },
      
                {
                  path: 'ViewIndent',
                  component: ViewIndentComponent,
                  data: {
                    title: 'ViewIndent'
                  }
                }
              ]
      },
      {
              path: 'IndentManagement',
              data: {
                title: 'IndentManagement'
              },
              children: [
                {
                  path: 'AddIndent',
                  component: AddIndentComponent,
                  data: {
                    title: 'AddIndent'
                  }
                },
      
                {
                  path: 'ViewIndent',
                  component: ViewIndentComponent,
                  data: {
                    title: 'ViewIndent'
                  }
                }
              ]
      },
      {
        path: 'MasterManagement',
        data: {
          title: 'IndentManagement'
        },
        children: [
          {
            path: 'AddCategory',
            component: AddCategoryComponent,
            data: {
              title: 'AddCategory'
            }
          },
          {
            path: 'AddGroup',
            component: AddGroupComponent,
            data: {
              title: 'AddGroup'
            }
          }
        ]
},
      {
        path: 'NITManagement',
        data: {
          title: 'NITManagement'
        },
        children: [
          {
            path: 'CreateNIT',
            component: CreateNITComponent,
            data: {
              title: 'CreateNIT'
            }
          },
          {
            path: 'ViewNIT/:',
            component: ViewNITComponent,
            data: {
              title: 'ViewNIT'
            }
          },
          {
            path: 'ListOfNIT',
            component: ListOfNITComponent,
            data: {
              title: 'ListOfNIT'
            }
          }
          ,
          {
            path: 'ListOfRFP',
            component: ListOfRFPComponent,
            data: {
              title: 'ListOfRFP'
            }
          }
          //
          ,
          {
            path: 'UploadBOQ',
            component: UploadBOQComponent,
            data: {
              title: 'UploadBOQ'
            }
          }
        ]
      },
      {
        path: 'EMDManagement',
        data: {
          title: 'EMDManagement'
        },
        children: [
          {
            path: 'AddEMD',
            component: AddEMDComponent,
            data: {
              title: 'AddEMD'
            }
          },
          {
            path: 'ViewEMD',
            component: ViewEMDComponent,
            data: {
              title: 'ViewEMD'
            }
          },
          {
            path: 'ReleaseForFeitOFEMD',
            component: ReleaseForFeitOFEMDComponent,
            data: {
              title: 'ReleaseForFeitOFEMD'
            }
          },
          {
            path: 'SearchEMD',
            component:SearchEMDComponent,
            data: {
              title: 'SearchEMD'
            }
          },
          {
            path: 'TECSummary',
            component:TECSummaryComponent,
            data: {
              title: 'TECSummary'
            }
          }
          //
        ]
      },
      {
        path: 'ATNoteManagement',
        data: {
          title: 'ATNoteManagement'
        },
        children: [
          {
            path: 'CreateATNote',
            component: CreateATNoteComponent,
            data: {
              title: 'CreateATNote'
            }
          },
          {
            path: 'ListOfATNote',
            component: ListOfATNoteComponent,
            data: {
              title: 'ListOfATNote'
            }
          },
          {
            path: 'ViewATNote',
            component:ViewATNoteComponent,
            data: {
              title: 'ViewATNote'
            }
          }
        ]
      },
      {
        path: 'PBGManagement',
        data: {
          title: 'PBGManagement'
        },
        children: [
          {
            path: 'ListOfPBG',
            component:ListOfPBGComponent,
            data: {
              title: 'ListOfPBG'
            }
          },
          {
            path: 'ViewUpdatePBGDetails',
            component: ViewUpdatePBGDetailsComponent,
            data: {
              title: 'ViewUpdatePBGDetails'
            }
          }
        ]
      },
      {
        path: 'SupplyManagement',
        data: {
          title: 'SupplyManagement'
        },
        children: [
          {
            path: 'SupplyPosition',
            component:SupplyPositionComponent,
            data: {
              title: 'SupplyPosition'
            }
          },
          {
            path: 'ViewUpdatePBGDetails',
            component: ViewUpdatePBGDetailsComponent,
            data: {
              title: 'ViewUpdatePBGDetails'
            }
          }
        ]
      },
      {
        path: 'DPExManagement',
        data: {
          title: 'DPExManagement'
        },
        children: [
          {
            path: 'DPExtentions',
            component:DPExtentionsComponent,
            data: {
              title: 'DPExtentions'
            }
          },
          {
            path: 'ViewUpdateDPExtentions/:id',
            component: ViewUpdateDPExtentionsComponent,
            data: {
              title: 'ViewUpdateDPExtentions'
            }
          },
          //ViewDPExtentions
          {
            path: 'ViewDPExtentions',
            component: ViewDPExtentionsComponent,
            data: {
              title: 'ViewDPExtentions'
            }
          }
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
