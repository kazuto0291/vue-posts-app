import Vue from 'vue';
import VueRouter from 'vue-router';
import MessageView from '../views/MessageView.vue';
import General from '../views/General.vue';
import Chat from '../views/Chat.vue';
import SelfIntroduction from '../views/SelfIntroduction.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/:channelId',
    name: 'MessageView',
    component: MessageView
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/selfIntroduction',
    name: 'SelfIntroduction',
    component: SelfIntroduction
  },
  {
    path: '*',
    name: 'General',
    component: General
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
