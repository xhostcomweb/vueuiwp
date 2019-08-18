import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue")
},
    {
      path: "/parts",
      name: "parts",
      component: () =>
      import(/* webpackChunkName: "parts" */ "./views/Parts.vue")
    },
    {
      path: "/components",
      name: "components",
      component: () =>
      import(/* webpackChunkName: "components" */ "./views/Components.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
      import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    }
  ]
});
