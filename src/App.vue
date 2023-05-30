<script >
import { RouterLink, RouterView } from 'vue-router';


$(document).ready(function(){
  $(".full-right").hover(function(){
    $(".full-left").animate({right: '10%'}).show();
  },
  function(){
    $(".full-left").animate({right: '0%'}).show();
  },
  );
});
</script>

<template>
  <header>
   

     <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    -->
  </header>

  <div class=" col full-right">
    <div style="margin-top: 12rem;margin-left: 2rem;">
      <h2 class="h1">Welcome to FGYM Fitness!</h2>
    <div class="tt">
    <button class="btn startbtn">Start Today</button>
    <p>Already a member?</p>
    <button class="btn logbtn">Login</button>
  </div>
</div>
  </div>
  <RouterView />
   
</template>

<style scoped>

.tt .logbtn{
  color: white;
  border: 1px solid white;
  border-radius: 0;
  padding: 8px 69px ;


}
.tt .startbtn{
  color:#F9525A ;
  background-color:white ;
  padding: 8px 50px ;
  margin-top: 2em;
  margin-bottom: 3em;
  border: none;
  border-radius: 0;
}

.full-right p{
  margin-left: 1em;
  margin-bottom: 2em;
}
.full-right h2 ,.full-right p{
  color: white;
}

.full-right{
  background-image: url(./assets/2023-04-02_153032.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  position: fixed;
display: flex;
float: right;
    right: 0;
    top: 0;
    z-index: 1;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
    background-size: cover;
    width: 20%;
  

}
</style>
