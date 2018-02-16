<template>
<div>
<h1 style="margin-bottom: 20px;">Search serie by genre</h1>
  <div class="row">
      <div class="col-lg-3 genreBox" v-for="genre in genres" :key="genre">{{genre}}
      </div>
  </div>
</div>
</template>


<script>
export default {
    computed: {
        genres() {
            return this.$store.getters.getGenreList
        }
    }
}
   
</script>


<style>
    .genreBox {
        border: 1px solid black;
        padding: 20px;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
    }

    .genreBox:hover {
        cursor: pointer;
        background: lightgreen;
    }
</style>
