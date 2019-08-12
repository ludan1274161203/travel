<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-image-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Weekend',
  props: ['weekendList']
}
</script>
<style lang="scss" scoped>
@import '~styles/_mixin.scss';
.recommend-title {
  text-indent: 0.2rem;
  background: #eee;
  line-height: 0.7rem;
}
.item {
  width: 100%;
  .item-image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: 37.09%;
    .item-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  .item-info {
    .item-title {
      @include ellipsis;
      line-height: 0.36rem;
      margin: 0.1rem 0.1rem 0rem 0.1rem;
    }
    .item-desc {
      @include ellipsis;
      line-height: 0.44rem;
      margin: 0rem 0.1rem 0.1rem 0.1rem;
      color: #ccc;
    }
  }
}
</style>
