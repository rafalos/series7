import Vue from "vue"
import Vuex from "vuex"
import {router} from "../main"
Vue.use(Vuex);

export default new Vuex.Store({
        state: {
            genres: ["Comedy", "Sci-Fi", "Horror", "Romance", "Action", "Thriller", "Drama", "Mystery", "Crime", "Animation", "Adventure", "Fantasy", "Comedy-romance", "Action-comedy", "Superhero"],
            idToken: null,
            loggedIn: "None",
            isAdmin: false,
            serieList: [],
            selectedSerie:[]

        },
        mutations: {
            authUser(state, authData){
                state.idToken = authData.token;
                state.loggedIn = authData.email;
                state.isAdmin = authData.isAdmin;
            },
            clearAuthData(state) {
                state.idToken = null;
                state.loggedIn = null;
            },
            updateSerieList(state, serieList ) {
                state.serieList = serieList
            },
            setSelectedSerie(state, serie) {
                state.selectedSerie = serie.data.serie
            }
        },
        actions: {
            fetchSerieList({commit}) {
                Vue.http.get("series")
                .then(response => response.json())
                .then(data => {
                    commit("updateSerieList", data.series)
                    }
                )},
            signup ({commit}, authData) {
                Vue.http.post("register", authData)
                .then(function(res){
                    console.log(res)
                }) 
            },
            signin ({commit}, authData) {
                Vue.http.post("authenticate", authData)
                .then(function(res){
                    console.log(res)
                    commit ("authUser", {
                        token: res.data.token,
                        email: res.data.user.email,
                        isAdmin: res.data.user.admin
                    })
                    router.replace("/series")
                }) 
            },
            logout({commit}) {
                commit ("clearAuthData")
                router.replace("/series")
            },
            fetchSelectedSerie({commit}, id){
                Vue.http.get("series/"+id)
                .then(response => response.json())
                .then(data => {
                    commit("setSelectedSerie", {
                        data: data
                    })
        }
    )
            }
        }, 
        getters: {
            fetchCurrentList(state) {
                return state.serieList
            },
            isAuthenticated(state) {
               if(state.idToken == null) {
                   return false
               }else {
                   return {
                       account: state.loggedIn,
                       isAdmin: state.isAdmin
                       
                   }
               }
            },
            getSelectedSerie(state) {
                return state.selectedSerie
            },
            getGenreList(state) {
                return state.genres
            }

        }
})