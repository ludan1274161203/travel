<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>
<script>
import HomeHeader from './Components/Header'
import HomeSwiper from './Components/Swiper'
import HomeIcons from './Components/icons'
import Recommend from './Components/Recommend'
import Weekend from './Components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  }
}
</script>
<style lang="scss" scoped>
</style>
