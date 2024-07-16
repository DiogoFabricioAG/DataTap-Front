import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login/',
      name: 'login',
      component: () => import('../views/InicioSesion.vue')
    },
    {
      path: '/',
      name: 'pagPrincipal',
      component: () => import('../views/PaginaPrincipal.vue')
    },
    {
      path: '/encuesta/',
      name: 'encuestas',
      component: () => import('../views/EncuestaReview.vue')
    },
    {
      path: '/crear/',
      name: 'crear',
      component: () => import('../views/ZonaCreacion.vue')
    },
    {
      path: '/busqueda/',
      name: 'busqueda',
      component: () => import('../views/ZonaBusqueda.vue')
    },
  ]
})

export default router
