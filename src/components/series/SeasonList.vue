<template>
        <div class="col-lg-6">
          <h2 class="text-center">Seasons</h2>
          <ul list-group>
              <li class="list-group-item seasonItem" @click="clickSeason" v-for="(season, index) in seasons" :key="index">{{season.name}}</li>
          </ul>
      </div>
</template>


<script>
export default {
    props: ["seasons"],
    methods: {
    clickSeason(season) {
        this.$emit("episodeClicked", season)
        console.log("emited")
    }
    },
           
    }
</script>
