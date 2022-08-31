<template>
  <div class="navbar-brand">
    <router-link :to="props.to">
      {{ props.brandName }}
    </router-link>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ to: string | object; brandName: string }>(),
  { to: "/", brandName: "ShopKart" }
);
</script>
