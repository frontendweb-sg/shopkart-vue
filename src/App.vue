<template>
  <component :is="layout">
    <base-alert />
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseAlert from "./components/controls/BaseAlert.vue";

const route = useRoute();
const layout = computed(() =>
  route.meta ? route.meta.layout + "-layout" : "user-layout"
);
</script>
<style lang="scss">
body {
  background-color: $white;
}
</style>
