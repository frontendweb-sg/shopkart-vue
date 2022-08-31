<template>
  <admin-layout>
    <base-alert />
    <router-view></router-view>
  </admin-layout>
</template>

<script setup lang="ts">
import BaseAlert from "@/components/controls/BaseAlert.vue";
</script>
<style lang="scss">
body {
  background-color: $white;
}
</style>
