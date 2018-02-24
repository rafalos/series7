<template>
        <div class="col-lg-6">
          <h2 class="text-center">Seasons</h2>
          <ul list-group>
              <li ref="item" class="list-group-item seasonItem" @click="clickSeason(season)" v-for="(season, index) in seasons" :key="index">{{season.name}}</li>
          </ul>
      </div>
</template>


<script>
export default {
    props: ["seasons"],
    methods: {
    clickSeason(season) {
        this.$emit("seasonClicked", season)
    }
    },
             
    }
</script>

<style>
.seasonItem:hover{
	background: #222222;
    color: white;
	cursor: pointer;
}
</style>

