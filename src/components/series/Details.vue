<template>
<div class="container">
       <div class="row" style="border: 1px solid black">
           <div class="col-lg-2">
           <img class="img-thumbnail coverImage" :src="selected.coverImg">
           </div>
           <div class="col-lg-10">
               <h3 class="text-center"> {{selected.name}} Details</h3>
               <ul>
                   <li>Created by:  </li>
                   <li>Number of seasons: {{selected.seasons.length}} </li>
               </ul>
           </div>
        </div>
      <app-watch-details :seasons="selected.seasons"></app-watch-details>
</div>
</template>


<script>
import WatchDetails from "./WatchDetails"
 export default {
     computed: {
         selected() {
             return this.$store.getters.getSelectedSerie
         }
     },
     beforeCreate() {
         this.$store.dispatch("fetchSelectedSerie", this.$route.params.id)
     },
    components: {
        appWatchDetails: WatchDetails
    }
 } 
  
</script>

<style scoped>

.detailsContainer {
    padding: 10px;
}


</style>
