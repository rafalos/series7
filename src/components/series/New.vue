<template>
  <div>
    <form>
  <div class="form-group">
    <label for="">Name</label>
    <input type="text" class="form-control" placeholder="Enter name of series" v-model="serie.name">
    {{serie.name}}
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Name of episode" @keydown.enter="appendEpisode">
		  <label for="">Episodes:</label>
		<ul>
			<li v-for="(episode, index) in serie.episodes" :key="index">{{episode}}</li>
		</ul>
  </div>
 <div class="form-group">
		<input type="text" class="form-control" placeholder="Cover image" v-model="serie.coverImg">
 </div>
 <button class="btn btn-success" @click.prevent="addNew">Create new</button>
</form>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				serie: {
					name: "",
					episodes: [],
					coverImg: ""
				}
			}
		},
		methods: {
			appendEpisode(e){
				this.serie.episodes.push(e.target.value)
				e.target.value = ""
			},
			addNew() {
				this.$http.post("series", this.serie);
			}
		}
	}
</script>
