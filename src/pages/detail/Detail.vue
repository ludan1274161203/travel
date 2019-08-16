<template>
  <div>
    <detail-banner></detail-banner>
    <gallery :gallaryImgs="detail.gallaryImgs"></gallery>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import Gallery from 'commons/Gallery.vue'
import DetailHeader from './components/DetailHeader'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      detail: {}
    }
  },
  components: {
    DetailBanner,
    Gallery,
    DetailHeader
  },
  mounted () {
    axios.get('static/mock/detail.json').then((res) => {
      let result = res.data
      if (result.ret && result.data) {
        this.detail = result.data
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>
