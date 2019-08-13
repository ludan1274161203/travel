<template>
  <ul class="list">
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
    <li class="item">4</li>
    <li class="item">5</li>
    <li class="item">6</li>
  </ul>
</template>
<script>
export default {
  name: 'Aiphabet'
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
