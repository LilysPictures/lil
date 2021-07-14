<template>
<div id="app">
  <!-- <router-link :to="{name: 'About'}"> About </router-link>  -->
  <app-header/>
  <spider/>
   <router-view/>
  <ghost/>
  <app-footer/>
</div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader'
import AppFooter from '@/layouts/AppFooter'

export default {
 name: "App",

components: {AppHeader, AppFooter}

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
