<template>
  <div>
    <form>
  <div class="form-group">
    <label for="">Name</label>
    <input type="text" class="form-control" placeholder="Enter name of series" v-model="serie.name">
    {{serie.name}}
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Name of season" @keydown.enter.prevent="appendSeason" v-model="seasonName">
		<div class="form-group">
			<button @click.prevent="appendSeason" class="btn btn-success"><i class="fas fa-plus"></i></button>
		</div>
		  <label for="">Seasons ({{serie.seasons.length}}):</label>
		<ul class="list-group">
			<li @click="removeSeason" class="list-group-item seasonItem" v-for="(season, index) in serie.seasons" :key="index">{{season.name}}</li>
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
				seasonName: "",
				serie: {
					name: "",
					seasons: [],
					coverImg: ""
				}
			}
		},
		methods: {
			appendSeason(){
				this.serie.seasons.push({name: this.seasonName})
				this.seasonName=""
			},
			addNew() {
				this.$http.post("series", this.serie);
			},
			removeSeason() {
				var value = event.target.innerHTML;
				var index = this.serie.seasons.findIndex(x => x.name==value);
				console.log(index)
				if (index > -1) {
    		this.serie.seasons.splice(index, 1);
}
			}
		}
	}
</script>

<style scoped>
	.seasonItem:hover{
		background: rgb(240, 177, 177);
		cursor: pointer;
	}
</style>
