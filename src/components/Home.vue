<template>
  <div class="jumbotron">
      <h1>Series7</h1>
      <h3><i>Find best series and track your progress</i></h3>
      <h4>Browse our huge database of {{number}} series added!</h4>
      <div v-if="featured">
        <h2 class="text-center">Featured serie</h2>
        <router-link class="col-lg-3 col-md-4 col-sm-6 text-center" 
        :to="'/series/' + featured._id">
        <h3 class="text-center">{{featured.name}}</h3>
        <div class="wrapper">
        <img class="coverImage" :src="featured.coverImg">
        </div>
        </router-link>

  </div>
  </div>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.getters.fetchCurrentList.length
    },
    featured() {
      return this.$store.getters.fetchCurrentList[this.getRandomNumber(this.$store.getters.fetchCurrentList.length)]
  }
},
methods: {
  getRandomNumber(x) {
    return Math.floor(Math.random() * x) + 0  
  }
}
}
 
</script>


<style scoped>
 .coverImage {
    max-height: 300px;
    transition: 0.2s;
 }

 .serieBox {
     cursor: pointer;
     padding: 10px;
 }


 .coverImage:hover {
     opacity: 0.7;
 }

</style>
