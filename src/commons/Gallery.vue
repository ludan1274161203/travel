<template>
  <div class="gallery-content" v-show="showContent" @click="handleClose">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
        <img class="swiper-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import Bus from '@/eventBus.js'
export default {
  name: 'Gallery',
  props: ['gallaryImgs'],
  data () {
    return {
      showContent: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observer: true,
        observeParent: true
      }
    }
  },
  methods: {
    handleClose () {
      this.showContent = false
    }
  },
  mounted () {
    Bus.$on('handleClick', (showGallery) => {
      this.showContent = showGallery
    })
  }
}
</script>
<style lang="scss" scoped>
.gallery-content >>> .swiper {
  overflow: inherit;
}
.gallery-content {
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #222;
  display: flex;
  align-items: center;
  .swiper {
    position: relative;
    overflow: inherit;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .swiper-img {
      width: 100%;
    }
    .swiper-pagination {
      width: 100%;
      height: 1.2rem;
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
