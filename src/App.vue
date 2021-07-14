<template>
<div id="app">
  <!-- <router-link :to="{name: 'About'}"> About </router-link>  -->
  <app-header/>
  <spider/>
  <!-- <router-link :to="{name: 'Osya'}"> <img src='./assets/Osya.png' style="width: 200px; height: 180px; margin-left: 10vw; margin-top: 20vh; position: absolute"/> </router-link>  -->
  <router-view/>
  <ghost/>
  <app-footer/>
</div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader'
import AppFooter from '@/layouts/AppFooter'
import spider from '@/components/spider'
import ghost from '@/components/ghost'

export default {
 name: "App",

components: {AppHeader, AppFooter, spider, ghost}

}
</script>

<style>
*, :after, :before {
    box-sizing: border-box;
    margin: 0;
}
#app {
  font-family: 'Frijole', cursive;
  position: relative;
  height: 100vh;
  margin: 0; 
  background: url(./assets/BG_MM.jpg) center no-repeat fixed;
  background-size: cover;
  
}



</style>
