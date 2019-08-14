<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <aiphabet :cities="cities"></aiphabet>
  </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/Citylist'
import Aiphabet from './components/Aiphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Aiphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getInfoRes (res) {
      const result = res.data
      if (result.ret && result.data) {
        this.hotCities = result.data.hotCities
        this.cities = result.data.cities
      }
    },
    getCitiesInfo () {
      axios.get('/static/mock/city.json').then(this.getInfoRes)
    }
  },
  mounted () {
    this.getCitiesInfo()
  }
}
</script>
<style lang="scss" scoped>
</style>
