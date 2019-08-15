<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe608;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe61b;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right iconfont">
        {{this.currentCity}}
        <span class="iconfont arrow-icon">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/_variable.scss';
.header {
  line-height: $headerHeight;
  display: flex;
  background-color: $bgcolor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: auto;
    height: 0.64rem;
    line-height: 0.64rem;
    padding-left: 0.2rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
