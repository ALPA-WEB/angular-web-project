import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '홈',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '메뉴',
    group: true,
  },
  {
    title: '학생회',
    icon: 'fa fa-university fa-1',
    link: '/pages/commitee',
    children: [
      {
        title: '소융대',
        link: '/pages/concil/university',
      },
      {
        title: '소프트',
        link: '/pages/concil/software',
      },
      {
        title: 'ICT',
        link: '/pages/concil/ict',
      },
    ],
  },
  {
    title: '학회',
    icon: 'fa fa-users fa-1',
    link: '/pages/academy',
    children: [
      {
        title: '영과일',
        link: '/pages/academy/zeroone',
      },
      {
        title: '피포',
        link: '/pages/academy/fifo',
      },
      {
        title: '알파',
        link: '/pages/academy/alpa',
      },
      {
        title: '자람',
        link: '/pages/academy/jaram',
      },
      {
        title: '하이큐브',
        link: '/pages/academy/hycube',
      },

    ],
  },
  {
    title: '편의(가명)',
    icon: 'nb-keypad',
    link: '/pages/convenience',
    children: [
      {
        title: '스룸 사물함 신청',
        link: '/pages/convenience/locker',
      },{
        title: '소융 벼룩시장',
        link: '/pages/convenience/market',
      },
    ],
  },
    /*
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/pages/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
