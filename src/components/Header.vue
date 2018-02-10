<template>
 <div class="col-lg-2 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                <div class="list-group border-0 card text-center text-md-left">
                    <router-link tag="h1" class="brandText" to="/">Series7</router-link>
                <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"> <i class="fa fa-list"></i> <span class="d-none d-md-inline">Series </span> </a>
                <div class="collapse" id="menu1">
                    <router-link to="/series" activeClass="active"><a class="list-group-item">Series List</a></router-link>
                    <router-link to="/new" activeClass="active"><a class="list-group-item">Add new</a></router-link>
                </div>
                <a href="#menu3" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i class="fa fa-user"></i> <span class="d-none d-md-inline">User account </span></a>
                <div class="collapse" id="menu3">
                    <router-link to="/signin" v-if="!auth"><a class="list-group-item">Login</a></router-link>
                     <router-link to="/signup" v-if="!auth"><a class="list-group-item">Register</a></router-link>
                     <router-link to="/profile" v-if="auth"><a class="list-group-item">{{auth.account}}</a></router-link>
                     <li class="list-group-item logout" @click="onLogout" v-if="auth">Logout</li>
                </div>
                <router-link to="/about" class="standalone list-group-item d-inline-block"><i class="fas fa-info-circle"></i><span class="d-none d-md-inline"> About</span></router-link>
                <router-link v-if="auth.isAdmin" to="/admin" class="standalone list-group-item d-inline-block"><i class="fas fa-wrench"></i></i><span class="d-none d-md-inline"> Admin</span></router-link>
            </div>
        </div>
</template>

<script>
    export default {
        computed: {
            auth() {
                return this.$store.getters.isAuthenticated
            }
        },
        methods: {
            onLogout() {
                this.$store.dispatch("logout")
            }
        }
    }
</script>

<style scoped>
.logout:hover {
    text-decoration: underline;
    cursor: pointer
}
  .brandText {
    margin: 30px;
    color: white;
    cursor: pointer;
  }

 .bar {
     border: 2px solid white;
     background: grey;
     width: 100%;
     
     
 } 
 .progress {
     background: green;
     width: 100%;
 }

 h2 {
     margin: 0 auto;
 }

 .list-group-item:hover{
     background: #222222 !important;
 }

 .standalone {
     background: #333333 !important;
 }
</style>



         
         
        

