<template>
  <div class="banner-content" @click="handleOpen">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      alt="图片加载失败"
    >
    <div class="banner-desc">
      <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
      <div class="iconfont banner-icon">&#xe692; 39</div>
    </div>
  </div>
</template>
<script>
import Bus from '@/eventBus.js'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: true
    }
  },
  methods: {
    handleOpen () {
      Bus.$emit('handleClick', this.showGallery)
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-content {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 0.2rem;
    .banner-title {
      float: left;
      color: #fff;
      opacity: 0.8;
      margin: 0 0 0.14rem 0;
    }
    .banner-icon {
      float: right;
      color: #fff;
      opacity: 0.6;
    }
  }
}
</style>
