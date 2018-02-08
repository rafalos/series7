<template>
        <div class="row">
      <input type="text" class="form-control" placeholder="Search" v-model="filterText" style="margin-bottom: 20px;">
        <router-link class="col-lg-3 col-md-4 col-sm-6  serieBox text-center" 
        tag="div" v-for="serie in fetched.series" 
        :to="'/series/' + serie._id" 
        :key="serie._id"><h3 class="text-center">{{serie.name}}</h3>
        <div class="wrapper">
        <img class="img img-responsive coverImage" :src="serie.coverImg">
        </div>
        </router-link>
        </div>
</template>

<script>
import Details from "./Details"
export default {
    data(){
    return {
        filterText:"",
        series:[],
        fetched: []
    }
},
    components: {
        appSerieDetails: Details
    },
    watch: {
        series() {
            this.fetched = this.series
        }
    },
    computed: {
        filteredSeries() {
            return this.fetched.series.filter((element)=>{
                console.log(element)
                return element.name.toLowerCase().match(this.filterText.toLowerCase());
            })
        }
    },
    beforeCreate() {
      this.$store.dispatch("fetchSerieList")
        this.series = this.$store.getters.fetchCurrentList
    },
}
</script>

<style scoped>
 .coverImage {
    height: 200px;
    overflow: hidden;
 }
 .custom {
   cursor: pointer;
 }

 .custom:hover {
   background: rgba(223, 226, 248, 0.972);
 }

 .serieBox {
     cursor: pointer;
     padding: 10px;
 }

 .serieBox:hover {
     border: 1px dashed black
 }

 .coverImage:hover {
     opacity: 0.5;
 }

 input {
     font-size: 1.4em;
 }

</style>
