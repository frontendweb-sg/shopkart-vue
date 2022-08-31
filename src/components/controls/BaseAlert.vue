<template>
  <div v-if="alertStore.visible" :class="['alert d-flex', classes]">
    <div class="ms-2">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="alertStore.alertHide()"
      ></button>
      <h6 class="mb-0">{{ alertStore.color?.toUpperCase() }}</h6>
      <p class="text-xs mb-0">{{ alertStore.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAlertStore } from "@/store/alert";

const alertStore = useAlertStore();

const classes = computed(() => ({
  ["alert-" + alertStore.color]: alertStore.color,
  ["alert-" + alertStore.size]: alertStore.size,
  ["alert-" + alertStore.position]: alertStore.position,
}));
</script>

<style scoped lang="scss">
.fade {
  &-enter-active,
  &-from-active {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
.slide {
  &-enter-active,
  &-from-active {
    opacity: 1;
    transform: translateY(10px);
    transition: transform 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
