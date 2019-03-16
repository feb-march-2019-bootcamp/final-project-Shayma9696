import Router from 'vue-router';
import about from './components/About.vue';
import myheader from './components/myheader.vue';
import project from './components/project.vue';
import education  from './components/education.vue';
import contact  from './components/contact.vue'




const routes = [
    {path: '/', component: myheader},
    {path: '/About', component:about, props: true},
    {path: '/project', component:project, props: true},
    {path: '/education', component:education, props: true},
    {path: '/contact', component:contact, props: true}
  ]
  
  export const router = new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
  })