<template lang="pug">
.relative.transition-all(
  :class='[state ? "top-5 opacity-0" : "top-0", "!duration-1000"]'
)
  slot
</template>

<script setup lang="ts">
defineProps<{ state: boolean }>()
</script>

<style scoped lang="scss"></style>
