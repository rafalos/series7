<template>
        <div class="row">
      <input type="text" class="form-control" placeholder="Search" v-model="filterText" style="margin-bottom: 20px;">
        <router-link class="col-lg-3 col-md-4 col-sm-6  serieBox text-center" 
        tag="div" v-for="serie in newList" 
        :to="'/series/' + serie._id" 
        :key="serie._id"><h3 class="text-center">{{serie.name}}</h3>
        <div class="wrapper">
        <img class="coverImage" :src="serie.coverImg">
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
        series: this.newlist
    }
    },
    components: {
        appSerieDetails: Details
    },
    beforeCreate() {
        this.$store.dispatch("fetchSerieList")
    },
    computed: {
        newList() {
            return this.$store.getters.fetchCurrentList.filter((element)=>{
                return element.name.toLowerCase().match(this.filterText.toLowerCase())
            })
        }
    }
}
</script>

<style scoped>
 .coverImage {
    max-height: 200px;
    transition: 0.2s;
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



 .coverImage:hover {
     opacity: 0.7;
 }

 input {
     font-size: 1.4em;
 }

</style>
