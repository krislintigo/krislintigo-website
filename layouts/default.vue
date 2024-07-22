<template lang="pug">
el-main.m-auto.select-none(class='max-w-[1550px] !h-screen')
  .flex.flex-col.justify-between.h-full
    div
      slot
    el-footer
      .h-full.flex.justify-center.items-center
        h2.font-light Made by Krislintigo, 2024
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
