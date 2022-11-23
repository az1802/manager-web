import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "@/views/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/welcome",
          name: "welcome",
          component: Welcome,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
