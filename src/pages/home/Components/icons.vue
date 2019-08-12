<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['iconList'],
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.iconList.length
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/_variable.scss';
@import '~styles/_mixin.scss';
.icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  margin-bottom: 0.1rem;
  .icon {
    position: relative;
    float: left;
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-image-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .icon-desc {
      @include ellipsis;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkText;
    }
  }
}
</style>
