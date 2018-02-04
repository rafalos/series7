<template>
    <div class="row" style="margin: 20px; border: 1px solid black;">
        <app-season-list :seasons="seasons" @episodeClicked="checkSeason"></app-season-list>
        <app-episode-list v-if="episodesOpen" :season="seasonClicked"></app-episode-list>
    </div>
</template>


<script>
import SeasonList from "./SeasonList"
import EpisodeList from "./EpisodeList"
export default {
props: ["seasons"],
data() {
    return {
        episodesOpen: false,
        seasonClicked: ""
    }
},
methods: {
    checkSeason(season) {
        this.episodesOpen = true
        console.log(season)
        this.seasonClicked = season.target.innerHTML
    }
},
components: {
    appSeasonList: SeasonList,
    appEpisodeList: EpisodeList,
}
}
</script>
