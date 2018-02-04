<template>
<div>
  <h4 class="text-center">Add new episode to {{season.name}} <button class="btn btn-danger" @click="exitClicked">X</button></h4>
  <div class="form-group">
      <label>Name</label>
  <input type="text" class="form-control" name="name" v-model="name">
  </div>
  <div class="form-group">
      <label>Duration</label>
  <input type="number" class="form-control" name="duration" v-model="duration">
  </div>
  <button class="btn btn-success" @click="createNew">Add new</button>
</div>
</template>

<script>
    export default {
        props: ["season"],
        data() {
            return {
                name: "",
                duration: 0
            }
        },
        methods: {
            exitClicked() {
                this.$emit("exitClicked")
            },
            createNew(){
                var episode = {
                    seasonName: this.season.name,
                    name: this.name,
                    duration: this.duration
                }    
                this.$http.post("series/"+this.$route.params.id, episode)
                .then(function(value){
                    console.log(value)
                    this.$emit("episodeAdded", value.data)
                });
            }
        }
    }
</script>
