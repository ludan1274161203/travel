<template>
  <div>
    <router-link tag="div" to="/home" class="abs" v-if="showHeader">
      <div class="iconfont header-back-icon">&#xe608;</div>
    </router-link>
    <div class="header" v-if="!showHeader" :style="opacityStyle">
      <router-link tag="div" to="/home" class="iconfont header-back">&#xe608;</router-link>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.body.scrollTop || document.documentElement.scrollTop
      if (top > 60) {
        this.showHeader = false
        if (top < 140) {
          this.opacityStyle.opacity = top / 140
        }
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/_variable.scss';
.abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  background-color: #222;
  opacity: 0.8;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  line-height: 0.6rem;
  text-align: center;
  .header-back-icon {
    color: #fff;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
