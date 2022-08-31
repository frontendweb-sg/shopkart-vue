<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  full: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  full: false,
});

const classes = props.full ? "container-fluid" : "container";
</script>

<style>
</style>