<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import HomeHeader from './Components/Header'
import HomeSwiper from './Components/Swiper'
import HomeIcons from './Components/icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style lang="scss" scoped>
</style>
