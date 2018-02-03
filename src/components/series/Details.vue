<template>
<div class="container">
       <h1 class="text-center"> {{name}} Details</h1>
  <div class="row">
      <div class="col-lg-6">
          c1
      </div>
       <div class="col-lg-6">
          <ul list-group>
              <li class="list-group-item" v-for="( index, episode) in episodes" :key="index">{{episode}}</li>
          </ul>
      </div>
  </div>
 

</div>
</template>


<script>
 export default {
     data() {
         return {
             name: "",
             coverImg:"",
             episodes:[]
         }
     },
     created() {
    this.$http.get("series/"+ this.$route.params.id)
    .then(response => response.json())
    .then(data => {
        this.name = data.serie.name
        this.coverImg = data.serie.coverImg
        this.episodes = data.serie.episodes
        }
    )}
 } 
  
</script>
