<template>
<div class="container-fluid" id="main-wrapper">
  <app-header></app-header>
  <div class="container">
  <router-view></router-view>
  </div>


</div>

</template>

<script>
import Header from "./components/Header"
export default {
  data() {
    return{
      series: []
    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style>
#main-wrapper {
  padding: 0;
}
</style>
