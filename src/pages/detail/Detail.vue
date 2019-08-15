<template>
  <div>
    <detail-banner></detail-banner>
    <gallery :gallaryImgs="detail.gallaryImgs"></gallery>
  </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import Gallery from 'commons/Gallery.vue'
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
    Gallery
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
</style>
