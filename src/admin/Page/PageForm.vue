<template>
  <form @submit.prevent="onSave">
    <input v-model="state.title" name="title" placeholder="Enter page name" />
    <input
      v-model="state.description"
      name="description"
      placeholder="Enter page name"
    />
    <input
      v-model="state.excerpt"
      name="excerpt"
      placeholder="Enter page name"
    />
    <button type="submit">Save</button>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// state
const state = reactive({
  title: "",
  description: "",
  excerpt: "",
});

const onSave = () => {
  console.log(state);
};
</script>

<style></style>
