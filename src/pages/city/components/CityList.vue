<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/_variable.scss';
.border-topbottom {
  &:before {
    border-color: #bbb;
  }
  &:after {
    border-color: #bbb;
  }
}
.border-bottom {
  &:before {
    border-color: #bbb;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  left: 0;
  .area {
    .title {
      line-height: 0.44rem;
      background-color: #eee;
      padding-left: 0.2rem;
      color: #666;
      font-size: 0.26rem;
    }
    .button-list {
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      overflow: hidden;
      .button-wraper {
        float: left;
        width: 33.33%;
        .button {
          margin: 0.1rem;
          text-align: center;
          border: 0.02rem solid #ccc;
          padding: 0.1rem 0;
          border-radius: 0.06rem;
          color: #666;
        }
      }
    }
    .item-list {
      .item {
        line-height: 0.76rem;
        color: #666;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>
