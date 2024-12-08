import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome";
import TheShop from "../views/TheShop";
import TheSingleProduct from "../views/TheSingleProduct";
import TheCart from "../views/TheCart";
import TheRegister from "../views/TheRegister";
import TheLogin from "../views/TheLogin";
import TheContact from "../views/TheContact";

const routes = [
  {
    path: "/",
    component: TheHome,
    name: "home",
    meta: {
      isUnauth: true,
    },
  },
  {
    path: "/shop",
    name: "shop",
    component: TheShop,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      isUnauth: true,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component:TheContact,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/single-product/:id",
    name: "product",
    component: TheSingleProduct,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: TheCart,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: TheRegister,
    meta: {
      isUnauth: true,
    },
  },
  {
    path:"/login",
    name:"login",
    component:TheLogin,
    meta: {
      isUnauth: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function(to,_,next){
  if(to.meta.isAuth && !localStorage.getItem("user")){
    return next("/login")
  }

  return next();
})

export default router;
