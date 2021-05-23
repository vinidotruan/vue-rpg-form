import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../components/User.vue";
import UserForm from "../views/users/UserForm.vue";

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
        component: UserForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
