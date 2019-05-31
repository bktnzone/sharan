import React from 'react';
//import BaseRoutes from './routes.base';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const VenueList = React.lazy(() => import('./views/Venue/VenueList'));
const VenueEdit = React.lazy(() => import('./views/Venue/VenueEdit'));


const BuildingList = React.lazy(() => import('./views/Building/BuildingList'));
//const BuildingEdit = React.lazy(() => import('./views/Building/BuildingEdit'));

const EventList = React.lazy(() => import('./views/Event/EventList'));
//const EventEdit = React.lazy(() => import('./views/Event/EventEdit'));

const FoodReqList = React.lazy(() => import('./views/FoodRequest/ReqList'));
const FoodReqEdit = React.lazy(() => import('./views/FoodRequest/ReqEdit'));


const RegList = React.lazy(() => import('./views/Registration/RegList'));
const RegEdit = React.lazy(() => import('./views/Registration/RegEdit'));
const Allotment = React.lazy(() => import('./views/Registration/Allotment'));



const UserList = React.lazy(() => import('./views/User/UserList'));
const UserEdit = React.lazy(() => import('./views/User/UserEdit'));

const ReservedList = React.lazy(() => import('./views/Reserved/ReservedList'));


//const User = React.lazy(() => import('./views/Venue/VenueEdit'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/venues', exact: true,  name: 'Venues', component: VenueList },
  { path: '/venues/:venueId', exact: true,  name: 'Venues', component: VenueEdit },
  { path: '/events', exact: true,  name: 'Events', component: EventList },
  //{ path: '/events/:eventId', exact: true,  name: 'Events', component: EventEdit },
  { path: '/buildings', exact: true,  name: 'Buildings', component: BuildingList },
  { path: 'venues/:venueId/buildings/:buildingId', exact: true,  name: 'Buildings', component: VenueList },
  { path: 'buildings/:buildingId/floors', exact: true,  name: 'Venues', component: VenueList },
  { path: 'buildings/:buildingId/floors/:floorId', exact: true,  name: 'Floors', component: VenueList },
  { path: '/regs', exact: true,  name: 'Registrations', component: RegList },
  { path: '/regs/:regId', exact: true,   component: RegEdit },
  { path: '/regs/:regId/allotment', exact: true,   component: Allotment,title:'as' },
  { path: '/food-requests', exact: true,  name: 'Yathra Food', component: FoodReqList },
  { path: '/food-requests/:reqId', exact: true,   component: RegEdit },
  { path: '/centres', exact: true,  name: 'Venues', component: VenueList },
  { path: '/reserved', exact: true,  name: 'Reserved', component: ReservedList },
  { path: '/users', exact: true,  name: 'Users', component: UserList },
  { path: '/users/:id', exact: true, name: 'User Details', component: UserEdit },

 // { path: '/venues/:id', exact: true, name: 'User Details', component: VenueEdit },


];


export default  routes;
//export default BaseRoutes.concat(routes);
