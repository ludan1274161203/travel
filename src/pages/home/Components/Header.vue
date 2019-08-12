<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe608;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe61b;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right iconfont">
      北京
      <span class="iconfont arrow-icon">&#xe688;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: ['cities']
}
</script>
<style lang="scss" scoped>
@import '~styles/_variable.scss';
.header {
  line-height: 0.86rem;
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
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
