<template>
  <div class="wrapper">
    <aside>
      <ul class="d-flex list-inline">
        <li>
          <router-link to="/shopkart/admin/page">Page</router-link>
        </li>
        <li>
          <router-link to="/shopkart/admin/size">Size</router-link>
        </li>
        <li>
          <router-link to="/shopkart/admin/color">Color</router-link>
        </li>
        <li>
          <router-link to="/shopkart/admin/category">Category</router-link>
        </li>
        <li>
          <router-link to="/shopkart/admin/brand">Brand</router-link>
        </li>
        <li>
          <router-link to="/shopkart/admin/page">Page</router-link>
        </li>
      </ul>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
