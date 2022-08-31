<template>
  <div v-if="store.loading">Loading...</div>
  <div v-else>
    {{ store.pages }}
  </div>
</template>

<script lang="ts" setup>
import { usePage } from "@/store/page";
import { onMounted } from "@vue/runtime-core";
const store = usePage();

console.log("store", store.pages);

onMounted(async () => {
  await store.getAll();
});
</script>

<style>
</style>