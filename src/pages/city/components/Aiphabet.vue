<template>
  <ul class="list">
    <li
      class="item"
      @click="handleClick"
      @touchStart="handleTouchStart"
      @touchMove="handleTouchMove"
      @touchEnd="handleTouchEnd"
      v-for="(item,key) of cities"
      :key="key"
    >{{key}}</li>
  </ul>
</template>
<script>
import EventBus from '@/eventBus.js'
export default {
  name: 'Aiphabet',
  props: ['cities'],
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push[i]
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      const letter = e.target.innerHTML
      EventBus.$emit('getTarget', letter)
    },
    handleTouchStart () {

    },
    handleTouchMove () {

    },
    handleTouchEnd () { }
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
