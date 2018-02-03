<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Series7</router-link> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ">
    <ul class="navbar-nav mr-auto" >
         <router-link to="/series" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Series List</a></router-link>
         <router-link to="/new" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Add new</a></router-link>
    </ul>
  </div>
</nav>
</template>

<script>
</script>

<style>


</style>

