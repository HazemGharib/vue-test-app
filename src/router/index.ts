import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Auth from "@okta/okta-vue";
import Home from "@/views/Home.vue";
import Administration from "@/views/Administration.vue";
import Employee from "@/views/Employee.vue";
import RetiredEmployees from "@/views/RetiredEmployees.vue";
import About from "@/views/About.vue";

Vue.use(Auth, {
  issuer: `${process.env.VUE_APP_ISS}`,
  clientId: `${process.env.VUE_APP_CLIENT_ID}`,
  redirectUri: `${process.env.VUE_APP_REDIRECT_URI}`,
  scopes: ["openid", "profile", "email"],
  pkce: true
});
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "Home",
    path: "/",
    alias: "/home",
    component: Home
  },
  {
    name: "Administration",
    path: "/admin",
    alias: "/administration",
    component: Administration,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "Employee",
    path: "/employee",
    alias: ["/emp", "/new_employee"],
    component: Employee
  },
  {
    name: "RetiredEmployees",
    path: "/retired",
    alias: "/retired_employees",
    component: RetiredEmployees
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
  {
    path: "/implicit/callback",
    component: Auth.handleCallback()
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
