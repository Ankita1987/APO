export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
  label?: any;
  wrapper?: any;
}

export const oicnavItems: NavData[] = [
{
    name: 'User Mgnt',
    url: '/theme/typography',
    icon: 'icon-pencil',
    children: [
      {
        name: 'AddUser',
        url: '/Admin/UserManagement/AddUser',
        icon: 'icon-cursor'
      },
      {
        name: 'CreateRole',
        url: '/Admin/UserManagement/createRole',
        icon: 'icon-cursor'
      },
      {
        name: 'Subordinates',
        url: '/Admin/UserManagement/subordinates',
        icon: 'icon-cursor'
      },
      {
        name: 'Change Password',
        url: '/Admin/UserManagement/ChangePassword',
        icon: 'icon-cursor'
      },
      {
        name: 'Notification',
        url: '/Admin/UserManagement/Notification',
        icon: 'icon-cursor'
      }
      ,
    {
      name: 'View User',
      url: '/Admin/UserManagement/ViewUser',
      icon: 'icon-cursor'
    },
    {
      name: 'Update Role',
      url: '/Admin/UserManagement/EditRole',
      icon: 'icon-cursor'
    },
    {
      name: 'Update Biometrix',
      url: '/Admin/UserManagement/UpdateBiometrix',
      icon: 'icon-cursor'
    },
    {
      name: 'Reset User',
      url: '/Admin/UserManagement/ResetUser',
      icon: 'icon-cursor'
    }
      

    
    ]
},
{
  name: 'Masters',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Add Item',
      url: '/Admin/ItemManagement/Additem',
      icon: 'icon-cursor'
    },
    {
      name: 'View Item',
      url: '/Admin/ItemManagement/ViewItem',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Add Category',
      url: '/Admin/MasterManagement/AddCategory',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Add Group',
      url: '/Admin/MasterManagement/AddGroup',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Item For User',
      url: '/Admin/ItemManagement/ItemForUser',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'Indent Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Add Indent',
      url: '/Admin/IndentManagement/AddIndent',
      icon: 'icon-cursor'
    },
    {
      name: 'View Indent',
      url: '/Admin/IndentManagement/ViewIndent',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'Notification',
  url: '/dashboard',
  icon: 'icon-speedometer',
  badge: {
    variant: 'info',
    text: 'NEW'
  }
}, 
{
  name: 'Alerts',
  url: '/theme/colors',
  icon: 'icon-drop'
},
{
  name: 'Vendor Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Add Vendor',
      url: '/Admin/VendorManagement/RegtVendor',
      icon: 'icon-cursor'
    }
    //,
    // {
    //   name: 'Vendor Certificate',
    //   url: '/Admin/VendorManagement/AddVendorCertificate',
    //   icon: 'icon-cursor'
    // },
    // {
    //   name: 'Ware House',
    //   url: '/Admin/VendorManagement/AddVendorWareHouse',
    //   icon: 'icon-cursor'
    // }
    // ,
    // {
    //   name: 'Test',
    //   url: '/Admin/VendorManagement/Test',
    //   icon: 'icon-cursor'
    // },
    // {
    //   name: 'Update Vendor',
    //   url: '/Admin/VendorManagement/UnRegVendor',
    //   icon: 'icon-cursor'
    // }
    ,
    
    {
      name: 'Vendor List',
      url: '/Admin/VendorManagement/VendorList',
      icon: 'icon-cursor'
    },
    
    // {
    //   name: 'View Vendors',
    //   url: '/Admin/VendorManagement/ViewVendorsDetails',
    //   icon: 'icon-cursor'
    // },
    {
      name: 'Vender Status',
      url: '/Admin/VendorManagement/Vendorstatus',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'DP Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
  
    {
      name: 'Add DP',
      url: '/Admin/DPManagement/AddDP',
      icon: 'icon-cursor'
    },
    {
      name: 'View DP',
      url: '/Admin/DPManagement/ViewDP',
      icon: 'icon-cursor'
    }
  ]
},


{
  name: 'NIT Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Add NIT',
      url: '/Admin/NITManagement/CreateNIT',
      icon: 'icon-cursor'
    }
    // ,
    // {
    //   name: 'View NIT',
    //   url: '/Admin/NITManagement/ViewNIT',
    //   icon: 'icon-cursor'
    // }
    ,
    {
      name: 'List Of NIT',
      url: '/Admin/NITManagement/ListOfNIT',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'List Of RFP',
      url: '/Admin/NITManagement/ListOfRFP',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Upload BOQ',
      url: '/Admin/NITManagement/UploadBOQ',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'EMD Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Add EMD',
      url: '/Admin/EMDManagement/AddEMD',
      icon: 'icon-cursor'
    },
    {
      name: 'View EMD',
      url: '/Admin/EMDManagement/ViewEMD',
      icon: 'icon-cursor'
    },
    {
      name: 'Release ForFeit OF EMD',
      url: '/Admin/EMDManagement/ReleaseForFeitOFEMD',
      icon: 'icon-cursor'
    },
    {
      name: 'Search EMD',
      url: '/Admin/EMDManagement/SearchEMD',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'TEC Summary',
      url: '/Admin/EMDManagement/TECSummary',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'AT Note Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Create ATNote',
      url: '/Admin/ATNoteManagement/CreateATNote',
      icon: 'icon-cursor'
    },
    {
      name: 'List Of ATNote',
      url: '/Admin/ATNoteManagement/ListOfATNote',
      icon: 'icon-cursor'
    },
    {
      name: 'View AT Note',
      url: '/Admin/ATNoteManagement/ViewATNote',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'PBG Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'List Of PBG',
      url: '/Admin/PBGManagement/ListOfPBG',
      icon: 'icon-cursor'
    },
    {
      name: 'View & Update',
      url: '/Admin/PBGManagement/ViewUpdatePBGDetails',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'Supply Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'Supply Mgnt',
      url: '/Admin/SupplyManagement/SupplyPosition',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'DP Ex Mgnt',
  url: '/theme/typography',
  icon: 'icon-pencil',
  children: [
    {
      name: 'DP Extentions',
      url: '/Admin/DPExManagement/DPExtentions',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'View & Update DPExtentions',
      url: '/Admin/DPExManagement/ViewUpdateDPExtentions',
      icon: 'icon-cursor'
    },
    {
      name: 'View DPExtentions',
      url: '/Admin/DPExManagement/ViewDPExtentions',
      icon: 'icon-cursor'
    }
  ]
},
{
  name: 'Pendings Approves',
  url: '',
  icon: 'icon-pencil',
  children: [
    {
      name: 'DP',
      url: '/OICAdmin/PendingApproves/ApproveDP',
      icon: 'icon-cursor'
    },
    {
      name: 'Indent',
      url: '/OICAdmin/PendingApproves/ApproveIndent',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'View Indent',
      url: '/OICAdmin/PendingApproves/ViewIndent',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Item',
      url: '/OICAdmin/PendingApproves/ApproveItem',
      icon: 'icon-cursor'
    } ,
    
    {
      name: 'View Item',
      url: '/OICAdmin/PendingApproves/ViewItem',
      icon: 'icon-cursor'
    },
    {
      name: 'Reg Vendor',
      url: '/OICAdmin/PendingApproves/ApproveRegVendor',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'UnReg Vendor',
      url: '/OICAdmin/PendingApproves/ApproveUnRegVendor',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Users',
      url: '/OICAdmin/PendingApproves/ApproveUser',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'Status',
      url: '/OICAdmin/PendingApproves/VendorStatus',
      icon: 'icon-cursor'
    },

    {
      name: 'NIT',
      url: '/OICAdmin/PendingApproves/ApproveNIT',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'RFP',
      url: '/OICAdmin/PendingApproves/ApproveRFP',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'BOQ',
      url: '/OICAdmin/PendingApproves/ApproveBOQ',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'EMD',
      url: '/OICAdmin/PendingApproves/ApproveEMD',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'ATNote List',
      url: '/OICAdmin/PendingApproves/ApproveATNoteList',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'PBG',
      url: '/OICAdmin/PendingApproves/ApprovePBG',
      icon: 'icon-cursor'
    }
    ,
    {
      name: 'View PBG Details',
      url: '/OICAdmin/PendingApproves/ViewPBGDetails',
      icon: 'icon-cursor'
    }

    ,
    {
      name: 'DPExtentions',
      url: '/OICAdmin/PendingApproves/ApproveDPExtentions',
      icon: 'icon-cursor'
    }
   
  ]
}
];
