<template>
  <div class="header">
    城市选择
    <router-link to="/home">
      <div class="iconfont header-back">&#xe608;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="scss" scoped>
@import 'styles/_variable.scss';
.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgcolor;
  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
  }
}
</style>
