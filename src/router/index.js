import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Challenges from "../views/Challenges";
import CreateChallenge from "../views/CreateChallenge";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      navigation: true
    }
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: Challenges,
    meta: {
      navigation: true
    }
  },
  {
    path: "/create",
    name: "CreateChallenge",
    component: CreateChallenge,
    meta: {
      navigation: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
