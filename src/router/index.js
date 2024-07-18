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
      name: 'encuesta',
      component: () => import('../views/EncuestaReview.vue')
    },
    {
      path: '/estadistica/',
      name: 'estadistica',
      component: () => import('../views/PaginaEstadisticas.vue')
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
    {
      path: '/control/',
      name: 'control',
      component: () => import('../views/PanelControl.vue')
    },
  ]
})

export default router
