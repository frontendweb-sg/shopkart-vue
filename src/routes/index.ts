import { AppRoute } from "@/utils/route-content";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// app routes
const routes: RouteRecordRaw[] = [
  {
    path: AppRoute.base,
    redirect: AppRoute.root,
  },
  {
    path: AppRoute.root,
    meta: { layout: "public" },
    component: () => import(/* webpackChunkName: home*/ "@/views/HomeView.vue"),
  },
  {
    path: AppRoute.about,
    meta: { layout: "public" },
    component: () =>
      import(/* webpackChunkName: about*/ "@/views/AboutView.vue"),
  },
  {
    path: AppRoute.contact,
    meta: { layout: "public" },
    component: () =>
      import(/* webpackChunkName:contact */ "@/views/ContactView.vue"),
  },
  {
    path: AppRoute.admin,
    component: () => import("@/admin/Admin.vue"),
    redirect: "/shopkart/admin/dashboard",
    meta: { layout: "admin" },
    children: [
      {
        path: AppRoute.adminDashboard,
        component: () => import("@/admin/Dashboard/DashboardView.vue"),
      },
      {
        path: AppRoute.adminUser,
        component: () => import("@/admin/User/UserView.vue"),
      },
      {
        path: AppRoute.adminSize,
        component: () => import("@/admin/Size/SizeView.vue"),
      },
      {
        path: AppRoute.adminColor,
        component: () => import("@/admin/Color/ColorView.vue"),
      },
      {
        path: AppRoute.adminCategory,
        component: () => import("@/admin/Category/CategoryView.vue"),
      },
      {
        path: AppRoute.adminProduct,
        component: () => import("@/admin/Product/ProductView.vue"),
      },
      {
        path: AppRoute.adminBrand,
        component: () => import("@/admin/Brand/BrandView.vue"),
      },
      {
        path: AppRoute.adminStore,
        component: () => import("@/admin/Store/StoreView.vue"),
      },
      {
        path: AppRoute.adminPage,
        component: () => import("@/admin/Page/AdminPage.vue"),
      },
    ],
  },
  {
    path: AppRoute.notFound,
    name: "Not Found",
    meta: { layout: "auth" },
    component: () =>
      import(/* webpackChunkName:not-found */ "@/views/NotFoundView.vue"),
  },
  {
    path: "/:matchAll(.*)",
    redirect: AppRoute.notFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router as appRoutes };
