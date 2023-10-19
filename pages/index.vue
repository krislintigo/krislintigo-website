<template lang="pug">
el-container
  el-row.flex-col.gap-y-5(justify='center')
    el-row.w-full.gap-x-5(justify='space-evenly')
      el-col(:span='15')
        el-card.w-full(shadow='never', class='!h-[600px]', body-class='!p-0 h-full')
          el-carousel.h-full(height='100%', interval='10000')
            el-carousel-item
              el-image.w-full.h-full(src='/images/test/1.jpg', fit='contain')
            el-carousel-item
              el-image.w-full.h-full(src='/images/test/2.jpg', fit='contain')
            el-carousel-item
              el-image.w-full.h-full(src='/images/test/3.jpg', fit='contain')
      el-col(:span='8')
        el-card.w-full.h-48(shadow='never')
          .select-text
            h2.text-3xl Kristoffer Lintigo
            h3.text-xl @krislintigo
          el-divider
          el-row.gap-x-2
            el-link(href='https://twitter.com/krislintigo', target='_blank') Twitter/X
            span &bull;
            el-link(href='https://t.me/krislintigo', target='_blank') Telegram
        el-card.w-full.mt-5(shadow='never')

    el-row.w-full.gap-x-5(justify='space-evenly')
      el-col(:span='13')
        el-row.w-full.gap-x-5(justify='space-between')
          el-col(:span='7')
            el-card.w-full.h-60(shadow='never')
          el-col(:span='16')
            el-card.w-full.h-60.bg-red-200(shadow='never', class='!bg-[#409eff]')
              h3.text-4xl.text-white PlaybackArt
              h3.mt-4.text-white Application for managing your films, series, games, books and other stuff
              el-link.mt-6(
                class='!text-xl !text-white',
                href='https://playbackart.lintigo.app',
                target='_blank'
              ) Let's try it
        el-row.w-full.mt-5
          el-col(:span='24')
            el-card.w-full.h-80(shadow='never')
              el-timeline
                el-timeline-item(timestamp='2014 - 2019') Polotsk State Gymnasium
                el-timeline-item(timestamp='2019 - 2023') Belarussian University of Informatics and Radioelectronics (System Software Engineer / Game Designer)
                el-timeline-item(timestamp='2022 - ...') Fullstack Software Engineer (Vue / Node.js)
      el-col(:span='10')
        el-card.relative.w-full.h-80(shadow='never', body-class='!p-0')
          el-image.brightness-50(src='/images/finland.jpeg', fit='contain')
          .absolute.inset-20.text-white
            h3.text-2xl Getting ready for Finland
            h4.mt-3
              span I decided to move to Finland, and I'm currently learning Finnish.
              span.select-text.ml-1 Onnea minulle, jotta näkisin tämän kauniin maan!
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<style scoped></style>
