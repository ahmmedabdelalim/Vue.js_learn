import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../components/Welcome.vue"
import About from "../views/About.vue"
import Blog from "../views/Blog.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path:"/welcome",
    name:" Welcome",
    component: Welcome


  },
  {
    path:"/blog",
    name:"Blog",
    component: Blog
    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
