<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wraper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import EventBus from '@/eventBus.js'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: ['hotCities', 'cities'],
  data () {
    return {
      letter: '',
      currentCity: '武汉'
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/home')
    },
    ...mapActions(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  created () {
    EventBus.$on('getTarget', word => { this.letter = word })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true })
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
