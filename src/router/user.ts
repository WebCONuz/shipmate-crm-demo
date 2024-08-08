export const userRoutes = {
  path: "/user",
  component: () => import("../layouts/UserLayout.vue"),
  children: [
    {
      path: "leads",
      name: "user-leads",
      component: () => import("../pages/user/Home.vue"),
    },
    {
      path: "quotes",
      name: "user-quotes",
      component: () => import("../pages/user/Quotes.vue"),
    },
    {
      path: "orders",
      name: "user-orders",
      component: () => import("../pages/user/Orders.vue"),
    },
    {
      path: "messages",
      name: "user-messages",
      component: () => import("../pages/user/Messages.vue"),
    },
    {
      path: "tasks",
      name: "user-tasks",
      component: () => import("../pages/user/Tasks.vue"),
    },
    {
      path: "profile",
      name: "user-profile",
      component: () => import("../pages/user/Profile.vue"),
    },
    {
      path: "insights",
      name: "user-insights",
      component: () => import("../pages/user/Statistics.vue"),
    },
    {
      path: "settings",
      component: () => import("../pages/user/settings/index.vue"),
      children: [
        {
          path: "users",
          name: "user-settings-users",
          component: () => import("../pages/user/settings/pages/Users.vue"),
        },
        {
          path: "teams",
          name: "user-settings-teams",
          component: () => import("../pages/user/settings/pages/Teams.vue"),
        },
        {
          path: "roles",
          name: "user-settings-roles",
          component: () => import("../pages/user/settings/pages/Roles.vue"),
        },
        {
          path: "providers",
          name: "user-settings-providers",
          component: () => import("../pages/user/settings/pages/Providers.vue"),
        },
        {
          path: "distribution",
          name: "user-settings-distribution",
          component: () =>
            import("../pages/user/settings/pages/Distribution.vue"),
        },
        {
          path: "parsing",
          name: "user-settings-parsing",
          component: () => import("../pages/user/settings/pages/Parsing.vue"),
        },
        {
          path: "ground",
          name: "user-settings-ground",
          component: () => import("../pages/user/settings/pages/Ground.vue"),
        },
        {
          path: "regions",
          name: "user-settings-regions",
          component: () => import("../pages/user/settings/pages/ByRegion.vue"),
        },
        {
          path: "international",
          name: "user-settings-international",
          component: () =>
            import("../pages/user/settings/pages/International.vue"),
        },
        {
          path: "company",
          name: "user-settings-company",
          component: () => import("../pages/user/settings/pages/Company.vue"),
        },
        {
          path: "merchant",
          name: "user-settings-merchant",
          component: () => import("../pages/user/settings/pages/Merchant.vue"),
        },
        {
          path: "voip",
          name: "user-settings-voip",
          component: () => import("../pages/user/settings/pages/VoIP.vue"),
        },
        {
          path: "templates",
          name: "user-settings-templates",
          component: () => import("../pages/user/settings/pages/Templates.vue"),
        },
      ],
    },
    {
      path: "technique",
      name: "user-technique",
      component: () => import("../pages/user/Technique.vue"),
    },
    {
      path: "other",
      name: "user-others",
      component: () => import("../pages/user/Other.vue"),
    },
  ],
};
