require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

let routes = [
    { path: '/data-user', 
      component: require('./components/pengguna/data-pengguna.vue').default
    },
    { path: '/data-level', 
      component: require('./components/pengguna/data-level.vue').default
    },
    //project-ticket
    { path: '/ticket', 
      component: require('./components/ticket/ticket.vue').default
    }
    //project-ticket
]

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
