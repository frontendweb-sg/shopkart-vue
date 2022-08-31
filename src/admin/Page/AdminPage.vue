<template>
  <base-container>
    <page-form />
    <div v-if="store.loading">Loading...</div>
    <div v-else>
      {{ store.pages }}
    </div>
  </base-container>
</template>

<script lang="ts" setup>
import { usePageStore } from "../../store/page";
import PageForm from "./PageForm.vue";

const store = usePageStore();

console.log("store", store.pages);

// fetch all state
store.getAll();
</script>

<style></style>
