import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./login/About.vue";
import Cookies from "js-cookie";
import { Form } from 'element-ui';

Vue.use(Router);
export const router = new Router({
  routes: [
    {
      path: "/",
      redirect:'/home/userdata',
      meta: {}
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children:[
        {
          path: "/home/userdata",
          name:"userdata",
          component: () =>
            import("./views/userdata.vue")
        },
        {
          path: "/home/userinfo",
          name:"userinfo",
          component: () =>
            import("./views/userinfo.vue")
        },
        {
          path: "/home/usercontent",
          name:'usercontent',
          component: () =>
            import("./views/usercontent.vue")
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About
    },

  ]

});
router.beforeEach(function(to,from,next){
  if(!Cookies.get('user') && to.name!=='about'){
     next({
       name:"about"
     });
  }
  else if(Cookies.get('user') && to.name =='about'){
    console.log()
    next({
      name:'userdata'
    });
  }
  else if(0===to.matched.length){
    from.name?next({ name:from.name }) : next('/'); 
  }
  else{
    next();
  }
});
