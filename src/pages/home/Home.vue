<template>
  <div>
    <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from './Components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
<style lang="scss" scoped>
html {
  font-size: 16px;
}
</style>
