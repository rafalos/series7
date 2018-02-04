<template>
      <div class="col-lg-6" v-if="!newEpisodeOpen">
           <h2 class="text-center">Episodes of {{season.name}} <button class="btn btn-success" @click="addNewEpisode" ><i class="fas fa-plus"></i></button></h2>
            <ul list-group>
              <li class="list-group-item episode" v-for="episode in season.episodes" :key="episode.name">Name: <strong>{{episode.name}}</strong> | Duration: {{episode.duration}} min.</li>
          </ul>
      </div>
      <div class="col-lg-6" v-else>
          <app-new-episode @episodeAdded="updateList" @exitClicked=" newEpisodeOpen = false" :season="season"></app-new-episode>
        </div>
</template>
<script>
import NewEpisode from "./NewEpisode"
export default {
    props: ["season"],
    data() {
        return {
            newEpisodeOpen: false
        }
    },
    components: {
        appNewEpisode: NewEpisode
    },
    methods: {
        addNewEpisode() {
            this.newEpisodeOpen = true;
        },
        updateList(value) {
            console.log(value)
        }
    }
}
    
</script>

<style>
    .episode:hover {
        background: rgb(184, 230, 199);
        cursor: pointer;
    }
</style>
