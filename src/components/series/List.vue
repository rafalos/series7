<template>
  <div class="row" style="padding: 20px;">
      <input type="text" class="form-control" placeholder="Search" v-model="filterText" style="margin-bottom: 20px;">
        <router-link class="col-lg-2 serieBox" 
        tag="div" v-for="serie in filteredSeries" 
        :to="'/series/' + serie._id" 
        :key="serie._id"><h3 class="text-center">{{serie.name}}</h3>
        <img class="img img-responsive coverImage" :src="serie.coverImg">
        </router-link>
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
     width: 200px;
     height: 300px;;
 }
 .custom {
   cursor: pointer;
 }

 .custom:hover {
   background: rgba(223, 226, 248, 0.972);
 }

 .serieBox {
     cursor: pointer;
 }
</style>
