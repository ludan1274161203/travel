<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名">
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, index) of list"
          :key="index"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      timer: null,
      list: []
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (!this.keyWord) {
        this.list = []
        return this.list
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let listOne = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value['spell'].indexOf(this.keyWord) > -1 || value['name'].indexOf(this.keyWord) > -1) {
              listOne.push(value)
            }
          })
        }
        this.list = listOne
        return this.list
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/_variable.scss';
.search {
  height: 0.72rem;
  background-color: $bgcolor;
  padding: 0.1rem;
  .search-input {
    height: 0.52rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    width: 100%;
    color: #666;
    box-sizing: border-box;
    padding: 0rem 0.1rem;
  }
}
.search-content {
  z-index: 1;
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>
