export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
     // badge: {
      //  variant: 'info',
       // text: 'NEW',
     // },
    },

    {
      title: true,
      name: 'Event Manager',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Events',
      url: '/events',
      icon: 'icon-puzzle'
    },
    {
      name: 'Registrations',
      url: '/regs',
      icon: 'icon-puzzle'
    }
    ,
    {
      name: 'Yathra Food',
      url: '#',
      icon: 'icon-puzzle'
    },
    {
      title: true,
      name: 'Master List',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Centres',
      url: '/centres',
      icon: 'icon-puzzle',
    },
    {
      name: 'Venues',
      url: '/venues',
      icon: 'icon-puzzle',
    },
    {
      name: 'Buildings',
      url: '/buildings',
      icon: 'icon-puzzle',
    },
    {
      name: 'Rooms',
      url: '/rooms',
      icon: 'icon-puzzle',
    },{
      title: true,
      name: 'Media Manager',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Media Assets',
      url: '/media-assets',
      icon: 'icon-puzzle',
    }
  ],
};
