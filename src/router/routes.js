const routes = [
  {
    path: '/',
    component: () => import('layouts/HomePage'),
    children: [
      {
        path: '',
        component: () => import('pages/MapPage')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
