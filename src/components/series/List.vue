<template>
  <div>
      <input type="text" class="form-control" placeholder="Search">
      <ul class="list-group">
        <router-link class="list-group-item custom" tag="li" v-for="serie in series" :to="'/series/' + serie._id" :key="serie._id"><h3>{{serie.name}}</h3> Episodes: {{serie.episodes.length}}<img class="img img-responsive float-right coverImage" :src="serie.coverImg"></router-link>
      </ul>
  </div>
</template>

<script>
import Details from "./Details"
export default {
    data(){
    return {
        series:[]
    }
},
    created() {
    this.$http.get("series")
    .then(response => response.json())
    .then(data => {
        this.series = data.series
        console.log(data.series)
        }
    )},
    components: {
      appSerieDetails: Details
    }
}
</script>

<style scoped>
 .coverImage {
     width: 100px;
     height: 150px;;
 }
 .custom {
   cursor: pointer;
 }

 .custom:hover {
   background: rgb(216, 219, 235);
 }
</style>
