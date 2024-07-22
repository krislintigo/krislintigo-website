<template lang="pug">
el-container
  el-row.flex-col.gap-y-5(justify='center')
    el-row.gap-x-5(justify='space-evenly')
      el-col(:span='15')
        LifeStoryCard
      el-col(:span='8')
        el-card(shadow='never')
          .select-text
            h1.text-3xl Kristoffer Lintigo
            h2.text-xl @krislintigo
            .mt-2
            el-tag.mr-1.mb-1(color='white', type='info') {{ age }}
            el-tag.mr-1.mb-1(color='white', type='info') Male/He/Him
            el-tag.mr-1.mb-1(color='white', type='info') Software Engineer
            el-tag.mr-1.mb-1(color='white', type='info') &#x1f49c; Ajax Crenshaw &#x1f49c;
          el-divider
          el-row.gap-x-2
            el-link(href='https://twitter.com/krislintigo', target='_blank') Twitter/X
            span &bull;
            el-link(href='https://t.me/krislintigo', target='_blank') Telegram
        el-card.mt-5(shadow='never')
          .flex.flex-col.gap-y-3
            el-row(align='middle')
              el-image.w-8.mr-2.border(src='/images/flags/rus_flag.svg')
              h3 Говорю по-русски
            el-row(align='middle')
              el-image.w-8.mr-2.border(src='/images/flags/wrw_flag.svg')
              h3 Размаўляю на беларускай мове
            el-row(align='middle')
              el-image.w-8.mr-2.border(src='/images/flags/usa_flag.svg')
              h3 Speak English
            el-row(align='middle')
              el-image.w-8.mr-2.border(src='/images/flags/finland_flag.svg')
              h3 Opettelen Suomea
    el-row.gap-x-5(justify='space-evenly')
      el-col(:span='13')
        el-row.gap-x-5(justify='space-between')
          el-col(:span='7')
            el-card.h-60(shadow='never')
          el-col(:span='16')
            PlaybackArtCard
        el-row.mt-5
          el-col(:span='24')
            el-card.w-full.h-80(shadow='never')
              el-timeline
                el-timeline-item(timestamp='2014 - 2019') Polotsk State Gymnasium
                el-timeline-item(timestamp='2019 - 2023') Belarussian University of Informatics and Radioelectronics (System Software Engineer / Game Designer)
                el-timeline-item(timestamp='2022 - ...') Fullstack Software Engineer (Vue / Node.js)
      el-col(:span='10')
        FinlandCard
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const age = computed(() => dayjs().diff(dayjs('2001-06-21'), 'years'))
</script>

<style scoped></style>
