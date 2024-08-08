export const signRoutes = {
  path: "/",
  component: () => import("../layouts/LoginLayout.vue"),
  children: [
    {
      path: "/",
      redirect: { name: "user-sign" },
    },
    {
      path: "login",
      name: "user-sign",
      component: () => import("../pages/sign/Login.vue"),
    },
    {
      path: ":pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../pages/error/404.vue"),
    },
  ],
};
