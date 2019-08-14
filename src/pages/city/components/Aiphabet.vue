<template>
  <ul class="list">
    <li
      class="item"
      @click="handleClick"
      @touchStart="handleTouchStart"
      @touchMove="handleTouchMove"
      @touchEnd="handleTouchEnd"
      v-for="(item,index) of letters"
      :key="index"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>
<script>
import EventBus from '@/eventBus.js'
export default {
  name: 'Aiphabet',
  props: ['cities'],
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      const letter = e.target.innerHTML
      EventBus.$emit('getTarget', letter)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touchs[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            EventBus.$emit('getTarget', this.letters[index])
          }
        }, 1000)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'styles/_variable.scss';
.list {
  display: flex;
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  color: $bgcolor;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item {
    line-height: 0.4rem;
    color: $bgcolor;
  }
}
</style>
