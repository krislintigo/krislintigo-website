<template lang="pug">
el-container
  el-row.w-full
    el-col
      AppearTransition(:state='state')
        el-row.my-16(justify='center')
          .w-60
            el-image(src='/images/brand-logo.png')
        el-row.gap-x-3.gap-y-3(justify='center')
          el-col(:span='24', :md='12')
            AppearTransition(:state='state')
              el-card(shadow='never', class='!bg-[#409eff]')
                .flex.items-center
                  el-image(src='/images/WhiteonBluArt.svg', class='!h-8')
          el-col(:span='24', :md='12')
            AppearTransition(:state='state')
              .cursor-pointer(@click='cardClick')
                el-card.furry-font(shadow='never', class='!bg-yellow-500')
                  h2.text-2xl.text-white.font-bold Furry ID Card
          el-col(:span='24', :md='12')
            AppearTransition(:state='state')
              el-card.mono-font(shadow='never', class='!bg-black')
                h2.text-2xl.text-white Software Engineering
</template>

<script setup lang="ts">
const state = ref(true)

onMounted(() => (state.value = false))

const cardClick = () => {
  console.log('card clicked')
}
</script>

<style scoped lang="scss"></style>
