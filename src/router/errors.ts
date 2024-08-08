export const errorRoutes = {
  path: "/error",
  component: () => import("../layouts/ErrorLayout.vue"),
  children: [
    {
      path: "500",
      name: "internal-error",
      component: () => import("../pages/error/500.vue"),
    },
  ],
};
