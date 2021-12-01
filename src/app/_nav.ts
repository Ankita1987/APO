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

export const navItems: NavData[] = [

  
  {
    name: 'Sitrep Mgnt',
    url: '/theme/typography',
    icon: 'icon-pencil',
    children: [
      {
        name: 'AddSitrep',
        url: '/Admin/SitrepDetails/AddSitrep',
        icon: 'icon-cursor'
      },


      {
        name: 'CardTemp',
        url: '/Admin/SitrepDetails/CardTemp',
        icon: 'icon-cursor'
      },
{
        name: 'CTCI',
        url: '/Admin/SitrepDetails/CTCI',
        icon: 'icon-cursor'
      },
{
        name: 'EnActivities',
        url: '/Admin/SitrepDetails/EnActivities',
        icon: 'icon-cursor'
      },
{
        name: 'LocationOfCdr',
        url: '/Admin/SitrepDetails/LocationOfCdr',
        icon: 'icon-cursor'
      },{
        name: 'MiscActivities',
        url: '/Admin/SitrepDetails/MiscActivities',
        icon: 'icon-cursor'
      },{
        name: 'OpsConducted',
        url: '/Admin/SitrepDetails/OpsConducted',
        icon: 'icon-cursor'
      },
{
        name: 'OpsConductedOWNCAS',
        url: '/Admin/SitrepDetails/OpsConductedOWNCAS',
        icon: 'icon-cursor'
      },
      {
        name: 'OpsOutcomeLoss',
        url: '/Admin/SitrepDetails/OpsOutcomeLoss',
        icon: 'icon-cursor'
      },
{
        name: 'OpsOutcomeRecoveries',
        url: '/Admin/SitrepDetails/OpsOutcomeRecoveries',
        icon: 'icon-cursor'
      },
{
        name: 'OpsOutcomeTrt',
        url: '/Admin/SitrepDetails/OpsOutcomeTrt',
        icon: 'icon-cursor'
      },
{
        name: 'OpWks',
        url: '/Admin/SitrepDetails/OpWks',
        icon: 'icon-cursor'
      },{
        name: 'SadhbhawanaActivities',
        url: '/Admin/SitrepDetails/SadhbhawanaActivities',
        icon: 'icon-cursor'
      },{
        name: 'SequenceOfEvent',
        url: '/Admin/SitrepDetails/SequenceOfEvent',
        icon: 'icon-cursor'
      },
{
        name: 'StateOfComn',
        url: '/Admin/SitrepDetails/StateOfComn',
        icon: 'icon-cursor'
      }
,
{
        name: 'TOBDetails',
        url: '/Admin/SitrepDetails/TOBDetails',
        icon: 'icon-cursor'
      }
,
{
        name: 'TrgActivities',
        url: '/Admin/SitrepDetails/TrgActivities',
        icon: 'icon-cursor'
      }
,
{
        name: 'ViewSitrep',
        url: '/Admin/SitrepDetails/ViewSitrep',
        icon: 'icon-cursor'
      }
,
{
        name: 'Weather',
        url: '/Admin/SitrepDetails/Weather',
        icon: 'icon-cursor'
      }
    
    ]
  }

  // {
  //   name: 'addstrip',
  //   url: '/Admin/addstrip',
  //   icon: 'icon-speedometer'
  // },
  // {
  //   name: 'enimiActivity',
  //   url: '/Admin/enimiActivity',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'cictinfo',
  //   url: '/Admin/cictinfo',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opscondected',
  //   url: '/Admin/opscondected',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opsoutcome',
  //   url: '/Admin/opsoutcome',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opscondectedloss',
  //   url: '/Admin/opscondectedloss',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opscondectedowncash',
  //   url: '/Admin/opscondectedowncash',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opsoutcometrt',
  //   url: '/Admin/opsoutcometrt',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opsoutcomerecoveres',
  //   url: '/Admin/opsoutcomerecoveres',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opsoutcomeloss',
  //   url: '/Admin/opsoutcomeloss',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'card',
  //   url: '/Admin/card',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'locationofcdr',
  //   url: '/Admin/locationofcdr',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'moments',
  //   url: '/Admin/moments',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'miscacvities',
  //   url: '/Admin/miscacvities',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'opwks',
  //   url: '/Admin/opwks',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'sadbahwnaactivites',
  //   url: '/Admin/sadbahwnaactivites',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'sequesnceofevent',
  //   url: '/Admin/sequesnceofevent',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'stateofcomn',
  //   url: '/Admin/stateofcomn',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'tobdetails',
  //   url: '/Admin/tobdetails',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'trgactivites',
  //   url: '/Admin/trgactivites',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'viewsitrep',
  //   url: '/Admin/viewsitrep',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'weather',
  //   url: '/Admin/weather',
  //   icon: 'icon-drop'
  // },
];
