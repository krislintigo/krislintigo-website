<template lang="pug">
el-card.h-72(shadow='never', class='!bg-[#409eff]')
  el-image.w-64(src='/images/WhiteonBluArt.svg')
  h3.mt-5.text-white.text-lg Application for managing your films, series, games, books and other stuff. Monitor ratings and time using convenient informative charts and keep track of your favorites!
  el-link.mt-6(
    class='!text-2xl !text-white',
    href='https://playbackart.lintigo.app',
    target='_blank'
  )
    el-icon.mr-1(:size='25', color='white')
      ElIconLink
    span Let's try it
</template>

<style scoped lang="scss"></style>
