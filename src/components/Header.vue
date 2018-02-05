<template>
 <div class="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                <div class="list-group border-0 card text-center text-md-left">
                <h1 class="brandText text-center">Series7</h1>
                <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i class="fa fa-dashboard"></i> <span class="d-none d-md-inline">Series </span> </a>
                <div class="collapse" id="menu1">
                    <router-link to="/series" activeClass="active"><a class="list-group-item">Series List</a></router-link>
                    <router-link to="/new" activeClass="active"><a class="list-group-item">Add new</a></router-link>
                </div>
                <a href="#menu3" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline">User account </span></a>
                <div class="collapse" id="menu3">
                    <router-link to="/login"><a class="list-group-item">Login</a></router-link>
                     <router-link to="/register"><a class="list-group-item">Register</a></router-link>
                </div>
                <a href="#" class="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i class="fa fa-heart"></i> <span class="d-none d-md-inline">About</span></a>
            </div>
        </div>
</template>

<script>
</script>

<style scoped>
  .brandText {
    color: white;
  }
</style>



         
         
        

