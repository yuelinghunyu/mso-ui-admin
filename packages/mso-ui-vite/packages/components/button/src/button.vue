<template>
  <button>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";
export default defineComponent({
  name: "MSOButton",
  props: buttonProps,
  setup(props) {},
});
</script>
