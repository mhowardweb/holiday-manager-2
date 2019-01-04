
const routes = [
  {
    path: '/',
    component: () => import('layouts/TabsLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'holidays', component: () => import('pages/Holidays.vue') },
      { path: 'add', component: () => import('pages/AddHoliday.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
