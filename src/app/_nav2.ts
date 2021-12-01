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
  
  export const navItems1: NavData[] = [
    
    {
      name: 'ITEM VARIETIES',
      url: '/base/ItemVarieties',
      icon: 'icon-puzzle'
    },
    {
      name: 'NOTIFICATION',
      url: '/base/Notification',
      icon: 'icon-pencil'
    },
    {
        name: 'ALERT',
        url: '/base/Alert',
        icon: 'icon-pencil'
      },
      {
        name: 'LIST OF INDENT',
        url: '/base/listofIndent',
        icon: 'icon-pencil'
      },
      {
        name: 'LIST OF DP',
        url: '/base/listofdp',
        icon: 'icon-pencil'
      },
      {
        name: 'NIT',
        url: '/base/typography',
        icon: 'icon-pencil',
        children: [
          {
            name: 'CREATE NIT',
            url: '/base/CreateNIT',
            icon: 'icon-cursor'
          },
          {
            name: 'PUBLISH NIT',
            url: '/base/publishNIT',
            icon: 'icon-cursor'
          }
       
        ]
      },
      {
        name: 'RFP',
        url: '/base/rfp',
        icon: 'icon-pencil'
      },
      {
        name: 'BOQ',
        url: '/base/boq',
        icon: 'icon-pencil'
      },
      {
        name: 'TECHNICAL',
        url: '/base/typography',
        icon: 'icon-pencil',
        children: [
          {
            name: 'PHYSICAL DOCU',
            url: '/base/technical/physicalDocu',
            icon: 'icon-cursor'
          },
          {
            name: 'TEC SUMMARY',
            url: '/base/technical/tecSummary',
            icon: 'icon-cursor'
          }
        ]
      }, 
       {
        name: 'FINANCIAL DOCU',
        url: '/base/fincialDocu',
        icon: 'icon-pencil'
      },  {
        name: 'RELEASE OF EMD',
        url: '/base/releaseOfEMD',
        icon: 'icon-pencil'
      },  {
        name: 'AT NOTE',
        url: '/base/typography',
        icon: 'icon-pencil',
        children: [
          {
            name: 'CREATE AT NOTE',
            url: '/base/ATNote/createATNote',
            icon: 'icon-cursor'
          },
          {
            name: 'AT NOTE ISSUED',
            url: '/base/ATNote/IssueATNote',
            icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'PBG DETAILS',
        url: '/base/pbgDetails',
        icon: 'icon-pencil'
      },  {
        name: 'POST CONTRACT MGT',
        url: '/base/typography',
        icon: 'icon-pencil',
        children: [
          {
            name: 'SUPPLY POSITION',
            url: '/base/postContractManagement/supplyPostion',
            icon: 'icon-cursor'
          },
          {
            name: 'DP EXTENSION',
            url: '/base/postContractManagement/dpExtention',
            icon: 'icon-cursor'
          },
          {
            name: 'CANCELLATION/COMPLETION',
            url: '/base/postContractManagement/cancelationcompletion',
            icon: 'icon-cursor'
          }
        ]
      },  {
        name: 'REPORT & RETURNS',
        url: '/base/ReportReturn',
        icon: 'icon-pencil'
      },
      {
        name: 'VENDOR STATUS',
        url: '/base/VenderStatus/',
        icon: 'icon-pencil'
      }
  ];
  