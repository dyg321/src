import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Aves from '@/components/Aves'
import Ave from '@/components/Ave'
import { LMap, LTileLayer, LMarker, LLayerGroup, LPolygon, LGeoJson, LPopup } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-layer-group', LLayerGroup)
Vue.component('l-polygon', LPolygon)
Vue.component('l-geo-json', LGeoJson)
Vue.component('l-popup', LPopup)
Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aves',
      name: 'Aves',
      component: Aves
    },
    {
      path: '/ave/:id',
      name: 'Ave',
      component: Ave
    },
    { path: '*', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
