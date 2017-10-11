import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import AddSong from '@/components/AddSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'Songs'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'Songs-add',
      component: AddSong
    },
    {
      path: '/songs/:songId',
      name: 'Song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'Song-edit',
      component: EditSong
    }
  ]
})
