<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/'+item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: ['recommendList']

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
  display: flex;
  height: 1.9rem;
  width: 100%;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    min-width: 0;
    flex: auto;
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.28rem;
      @include ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      @include ellipsis;
    }
    .item-button {
      line-height: 0.44rem;
      margin-top: 0.2rem;
      padding: 0 0.2rem;
      font-weight: bold;
      border-radius: 0.06rem;
      background-color: #ff9300;
      color: #fff;
    }
  }
}
</style>
