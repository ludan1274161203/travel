<template>
  <div>
    <div v-for="(item,index) of categoryList" :key="index">
      <div class="item-title border-bottom">{{item.title}}</div>
      <div v-if="item.children" class="child-list">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: ['categoryList']
}
</script>
<style lang="scss" scoped>
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}
.child-list {
  padding-left: 0.4rem;
}
</style>
