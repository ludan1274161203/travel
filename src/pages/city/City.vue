<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <aiphabet></aiphabet>
  </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/Citylist'
import Aiphabet from './components/Aiphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Aiphabet
  }
}
</script>
<style lang="scss" scoped>
</style>
