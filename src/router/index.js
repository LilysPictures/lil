
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: "/about",
    name: "About",
      component: () =>
      import("../views/About.vue"),
      meta: {
        layout: 'AppLayoutAbout'
      }
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
