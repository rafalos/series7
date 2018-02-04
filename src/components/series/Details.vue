<template>
<div class="container">
       <div class="row detailsContainer" style="border: 1px solid black">
           <div class="col-lg-2">
           <img class="img img-responsive coverImage float-left" :src="coverImg">
           </div>
           <div class="col-lg-10">
               <h3 class="text-center"> {{name}} Details</h3>
               <ul>
                   <li>Created by:  </li>
                   <li>Number of seasons: {{seasons.length}} </li>
               </ul>
           </div>
        </div>
      <app-watch-details :seasons="seasons"></app-watch-details>
</div>
</template>


<script>
import WatchDetails from "./WatchDetails"
 export default {
     data() {
         return {
             addEpisodeOpen: false,
             name: "",
             coverImg:"",
             seasons:[],
             clickedSeason: ""
         }
     },
     created() {
    this.$http.get("series/"+ this.$route.params.id)
    .then(response => response.json())
    .then(data => {
        this.name = data.serie.name
        this.coverImg = data.serie.coverImg
        this.seasons = data.serie.seasons
        }
    )},
    components: {
        appWatchDetails: WatchDetails
    }
 } 
  
</script>

<style>

.detailsContainer {
    padding: 10px;
}

.coverImage {
     width: 110px;
     height: 150px;
 }
</style>
