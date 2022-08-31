<template>
  <aside class="sidebar">
    <app-logo class="sidebar-brand" />
    <ul class="sidebar-nav">
      <li class="nav-item" v-for="menu in AdminMenu" :key="menu.id">
        <router-link
          active-class="active"
          class="nav-link"
          :to="'/shopkart/admin' + menu.link"
        >
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import AppLogo from "../AppLogo.vue";
const AdminMenu = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: "",
  },
  {
    id: 2,
    title: "Category",
    link: "/category",
    icon: "",
  },
  {
    id: 3,
    title: "Brand",
    link: "/brand",
    icon: "",
  },
  {
    id: 4,
    title: "Store",
    link: "/store",
    icon: "",
  },
  {
    id: 5,
    title: "Sizes",
    link: "/size",
    icon: "",
  },
  {
    id: 6,
    title: "Colors",
    link: "/color",
    icon: "",
  },
  {
    id: 7,
    title: "Products",
    link: "/Product",
    icon: "",
  },
  {
    id: 8,
    title: "Pages",
    link: "/page",
    icon: "",
  },
];
</script>

<style></style>
