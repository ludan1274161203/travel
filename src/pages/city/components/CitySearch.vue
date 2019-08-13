<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="scss" scoped>
@import '~styles/_variable.scss';
.search {
  height: 0.72rem;
  background-color: $bgcolor;
  padding: 0.1rem;
  .search-input {
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    width: 100%;
    color: #666;
    box-sizing: border-box;
    padding: 0rem 0.1rem;
  }
}
</style>
