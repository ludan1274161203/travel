<template>
  <div>
    <home-header :cities="cities"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>
<script>
import HomeHeader from './Components/Header'
import HomeSwiper from './Components/Swiper'
import HomeIcons from './Components/icons'
import Recommend from './Components/Recommend'
import Weekend from './Components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  data () {
    return {
      lastCity: [],
      cities: [],
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getCityInfo (res) {
      const result = res.data
      if (result.ret && result.data) {
        const data = result.data
        this.cities = data.cities
      }
    },
    getHomeInfoSucc (res) {
      const result = res.data
      if (result.ret && result.data) {
        const data = result.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
