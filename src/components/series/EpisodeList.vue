<template>
      <div class="col-lg-6">
           <h2 class="text-center">Episodes of {{season.name}}</h2>
            <ul list-group>
              <li class="list-group-item episode" v-for="episode in season.episodes" :key="episode.name">Name: <strong>{{episode.name}}</strong> | Duration: {{episode.duration}} min. Watched: {{episode.watched}}</li>
          </ul>
      </div>
</template>
<script>
import NewEpisode from "./NewEpisode"
export default {
    props: ["season"]
}
    
</script>

<style>
    .episode:hover {
        background: rgb(184, 230, 199);
        cursor: pointer;
    }
</style>
