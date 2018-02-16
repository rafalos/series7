<template>
  <div>
		<div class="header">
		<h2>Missing series?</h2>
		<h4><i>Let's add them to our database!</i></h4>
		</div>
    <form>
	<div class="row">
	<div class="col-lg-4">
		<h3 class="text-center">Details</h3>
  <div class="form-group">
    <label for="">Name</label>
    <input type="text" class="form-control" placeholder="Enter name of series" v-model="serie.name">
    {{serie.name}}
  </div>
	<div class="form-group">
    <label for="">Genre</label>
    <select class="form-control" v-model="serie.genre">
			<option v-for="genre in genres" :value="genre" :key="genre">{{genre}}</option>
		</select>
  </div>
 <div class="form-group">
		<input type="text" class="form-control" placeholder="Cover image" v-model="serie.coverImg">
 </div>
 </div>


<div class="col-lg-8">
		<h3 class="text-center">Seasons</h3>
  <div class="form-group">
		<label for="">Seasons</label>
    <input type="text" class="form-control" placeholder="Name of season" @keydown.enter.prevent="appendSeason" v-model="seasonName">
		<div class="form-group">
			<button @click.prevent="appendSeason" class="btn btn-success"><i class="fas fa-plus"></i></button>
		</div>
		  <label for="">Seasons number: ({{serie.seasons.length}}):</label>
		<div class="row">
			<div class="col-lg-6 seasonBox" @click="removeSeason(season)" v-for="(season, index) in serie.seasons" :key="index">
			<h5 class="text-center">Season: {{season.name}}</h5>	
				<ul class="list-group" id="episodeList">
					<li class="list-group-item" v-for="episode in season.episodes" :key="episode.name">{{episode.name}} and {{episode.duration}}</li>
					<button class="btn btn-success" @click.prevent.stop="appendEpisode">+</button>
				</ul>
				</div>
		</div>
  </div>
</div>
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
					coverImg: "",
					genre: ""
				}
			}
		},
		computed: {
			  genres() {
        	return this.$store.getters.getGenreList
      }
		},
		methods: {
			appendSeason(){
				if(this.seasonName == "") {
					return alert ("Please enter the season name")
				}else {
					this.serie.seasons.push({
						name: this.seasonName,
						episodes: [{
							name: "test",
							duration: 20
						}]
						})
					this.seasonName=""
				}
			},
			appendEpisode() {
				this.serie.seasons.episodes.push({
					name: "test"
				})
			},
			addNew() {
				this.$http.post("series", this.serie);
			},
			removeSeason(season) {
				var value = season.name;
				var index = this.serie.seasons.findIndex(x => x.name==value);
				if (index > -1) {
    		this.serie.seasons.splice(index, 1);
}
			}
		}
	}
</script>

<style scoped>
	.seasonBox {
		padding: 10px;
		border: 1px solid black;
	}
	.seasonBox:hover{
		background: rgb(240, 177, 177);
		cursor: pointer;
	}

	.header {
		margin-bottom: 30px;
	}
</style>
