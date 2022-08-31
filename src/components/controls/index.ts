import { AppRoute } from "@/utils";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: AppRoute.base,
    redirect: AppRoute.root,
  },
  {
    path: AppRoute.root,
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: AppRoute.signin,
    name: "Signin",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: AppRoute.dashbaord,
    name: "Dashboard",
    component: () => import("@/pages/Dashboard.vue"),
  },
  {
    path: AppRoute.setting,
    name: "Setting",
    component: () => import("@/pages/Setting.vue"),
  },
  {
    path: AppRoute.configuration,
    name: "Configuration",
    component: () => import("@/pages/Configuration.vue"),
  },
  {
    path: AppRoute.admin,
    name: "Admin",
    redirect: AppRoute.adminUser,
    component: () => import("@/pages/admin/Admin.vue"),
    children: [
      {
        path: AppRoute.adminUser,
        name: "Admin user",
        component: () => import("@/pages/admin/AdminUser.vue"),
      },
    ],
  },
  {
    path: AppRoute.notFound,
    name: "Not Found",
    component: () => import("@/pages/NotFound.vue"),
  },
  {
    path: "/:matchAll(.*)",
    redirect: AppRoute.notFound,
  },
];

/**
 * App routes
 */
const routers = createRouter({
  history: createWebHistory(),
  routes,
});

// routers.beforeEach(() => {
//   NProgress.start();
// });

// routers.beforeResolve((to, from, next) => {
//   NProgress.done();
// });

/**
 * Export
 */
export { routers as appRoutes };
