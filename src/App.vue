<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="top">
      <index></index>
    </div>
    <div class="context">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import index from '@/components/index'
export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  float: left;
}
.top {
  float: left;
  margin-bottom: 10px;
}
.context {
  float: left;
  margin-top: 20px;
}
</style>
