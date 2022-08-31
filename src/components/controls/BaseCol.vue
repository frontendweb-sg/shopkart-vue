<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
const props = withDefaults(defineProps<IProps>(), {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
});
const classes = {
  col:
    props.xs === 0 &&
    props.sm === 0 &&
    props.md === 0 &&
    props.lg === 0 &&
    props.xl === 0,
  ["col-xs-" + props.xs]: props.xs,
  ["col-sm-" + props.sm]: props.sm,
  ["col-md-" + props.md]: props.md,
  ["col-lg-" + props.lg]: props.lg,
  ["col-xl-" + props.xl]: props.xl,
};
</script>

<style></style>
