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
  <div class="row" style="margin: 20px;">
      <div class="col-lg-6">
          <h2 class="text-center">Seasons</h2>
          <ul list-group>
              <li class="list-group-item seasonItem" @click="displayEpisodes" v-for="( index, season) in seasons" :key="index">{{season}}</li>
          </ul>
      </div>
       <div class="col-lg-6" v-if="episodesOpen">
           <h2 class="text-center">Episodes of {{clickedSeason}} <button class="btn btn-success"><i class="fas fa-plus"></i></button></h2>
            <ul list-group>
              <li class="list-group-item">test</li>
          </ul>
      </div>
      <div class="col-lg-6" v-else>
          <h2 class="text-center">Select season</h2>
      </div>
  </div>
 
</div>
</template>


<script>
 export default {
     data() {
         return {
             addEpisodeOpen: false,
             episodesOpen: false, 
             name: "",
             coverImg:"",
             seasons:[],
             clickedSeason: ""
         }
     },
     methods: {
         displayEpisodes(event) {
             this.episodesOpen = true;
             this.clickedSeason = event.target.innerHTML;
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
    )}
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

.seasonItem:hover{
	background: rgb(191, 210, 240);
	cursor: pointer;
}
</style>
