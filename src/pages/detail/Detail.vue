<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
    <gallery :gallaryImgs="gallaryImgs"></gallery>
    <DetailHeader></DetailHeader>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import Gallery from 'commons/Gallery.vue'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    Gallery,
    DetailHeader,
    DetailList
  },
  methods: {
    getInfoRes (res) {
      const result = res.data
      if (result.ret && result.data) {
        this.sightName = result.data.sightName
        this.bannerImg = result.data.bannerImg
        this.gallaryImgs = result.data.gallaryImgs
        this.categoryList = result.data.categoryList
      }
    },
    getCitiesInfo () {
      axios.get('/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getInfoRes)
    }
  },
  activated () {
    this.getCitiesInfo()
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>
