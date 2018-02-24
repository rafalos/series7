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
			<div class="col-lg-6 seasonBox" @click.stop="removeSeason(season)" v-for="(season, index) in serie.seasons" :key="index">
			<h5 class="text-center">Season: {{season.name}}</h5>	
				<ul class="list-group" id="episodeList">
					<li class="list-group-item episode" v-for="episode in season.episodes" :key="episode.id" @click.stop="removeEpisode(episode)">{{episode.name}} and {{episode.duration}}</li>
					<li v-if="addNewEpisodeOpened" class="list-group-item" @click.stop>
						<input class="form-control" type="text" v-model="episodeName">
						<input v-model="episodeDuration" class="form-control" type="text">
						<button class="btn btn-danger" @click.stop.prevent="appendEpisode(season)">Add</button>
						<button class="btn btn-danger" @click.stop.prevent="addNewEpisodeOpened = false">X</button>
					</li>
					<button class="btn btn-success" @click.prevent.stop="newEpisodeOpen">Add episode</button>
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
				addNewEpisodeOpened: false,
				episodeName:"",
				episodeDuration:0,
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
							duration: 20,
							id: this.generateId()
						}]
						})
						console.log(this.serie.seasons)
					this.seasonName=""
				}
			},
			newEpisodeOpen() {
				this.addNewEpisodeOpened = !this.addNewEpisodeOpened;
			},
			appendEpisode(season) {
				season.episodes.push({
					name: this.episodeName,
					duration: this.episodeDuration
				})
				this.addNewEpisodeOpened = false
			},
			removeEpisode(episode) {
				console.log(episode)
			},
			addNew() {
				this.$http.post("series", this.serie).then(()=> {
					this.$store.dispatch("fetchSerieList").then(()=>{
					this.$router.push("/series")
				})
				});
				
			},
			removeSeason(season) {
				var value = season.name;
				var index = this.serie.seasons.findIndex(x => x.name==value);
				if (index > -1) {
			this.serie.seasons.splice(index, 1);
			this.addNewEpisodeOpened = false
			}
			},
			generateId() {
				return Math.floor(Math.random()*10000)+412
			}
		}
	}
</script>

<style scoped>
	.seasonBox {
		padding: 10px;
		border: 1px solid lightgrey;
	}
	.seasonBox:hover{
		background: rgb(240, 177, 177);
		cursor: pointer;
	}

	.header {
		margin-bottom: 30px;
	}

	.episode:hover {
		background: rgba(102, 216, 168, 0.534);
	}
</style>
