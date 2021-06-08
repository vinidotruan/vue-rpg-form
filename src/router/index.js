import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../components/User.vue";
import UserForm from "../views/users/UserForm.vue";
import LoginForm from "../views/login/LoginForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "User",
    component: User,

    children: [
      {
        path: "create",
        name: "Create Users",
        component: UserForm,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transitionName = toDepth < fromDepth ? "prev" : "next";
});

export default router;
