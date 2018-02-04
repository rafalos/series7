<template>
  <div>
      <input type="text" class="form-control" placeholder="Search" v-model="filterText">
      <ul class="list-group">
        <router-link class="list-group-item custom" tag="li" v-for="serie in filteredSeries" :to="'/series/' + serie._id" :key="serie._id"><h3>{{serie.name}}</h3> Seasons: {{serie.seasons.length}}<img class="img img-responsive float-right coverImage" :src="serie.coverImg"></router-link>
      </ul>
  </div>
</template>

<script>
import Details from "./Details"
export default {
    data(){
    return {
        filterText:"",
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
    },
    computed: {
        filteredSeries() {
            return this.series.filter((element)=>{
                return element.name.toLowerCase().match(this.filterText.toLowerCase());
            });
        }
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
   background: rgba(223, 226, 248, 0.972);
 }
</style>
