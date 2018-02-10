<template>
  <div class="jumbotron">
      <h1>Series7</h1>
      <h3><i>Find best series and track your progress</i></h3>
      <h4>Browse our huge database of {{number}} series added!</h4>
  </div>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.getters.fetchCurrentList.length
    }
  }
}
 
</script>
