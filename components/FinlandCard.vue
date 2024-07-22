<template lang="pug">
el-card.relative.h-80(shadow='never', body-class='!p-0')
  el-image.brightness-50(src='/images/finland.jpeg', fit='contain')
  .absolute.inset-20.text-white
    h3.text-2xl Getting ready for Finland
    h4.mt-3
      span I decided to move to Finland, and I'm currently learning Finnish.
      span.select-text.ml-1 Onnea minulle, jotta näkisin tämän kauniin maan!
</template>

<script setup lang="ts">
const a = 'hello'

const b = 'world'
</script>

<style scoped lang="scss"></style>
