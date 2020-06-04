import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Employee from "@/views/Employee.vue";
import RetiredEmployees from "@/views/RetiredEmployees.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "Home",
    path: "/",
    alias: "/home",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    component: About
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
