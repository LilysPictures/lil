<template>

<div id="app">
  <!-- <AppLayout>
  <router-link to="/"> HOME </router-link>
  <router-link :to="{name: 'About'}"> About </router-link> 
  <router-link :to="{name: 'Header'}"> Header </router-link> -->
  <app-header/>

  <!-- <v-btn
      @click="clickBtn"
     
  /> -->
  <!-- <img src='./assets/BG_MM_InversGraff.jpg' class="BG" v-if='showImage' /> -->
<!-- <button @click="clickBtn"></button> -->



<!-- <div class="ghost">	
  <img src="./assets/ghost.png" alt="ghost" style="width: 300px; height: 300px; bottom: 0; position: absolute; z-index: 12000" id="idGhost">	
 </div> -->


<!-- 
<img @click="show = !show" src="./assets/left_web.png" style="width: 200px; height: 180px">

<transition
   name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
  <img src="./assets/spider.png" style="width: 200px; height: 180px" v-if="show">     
  </transition>  -->

  <spider/>
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
 
// data(){
//   return{
     
//       // show: true
//      }
 
// },

components: {AppHeader, AppFooter, spider, ghost}


// methods: {
//   clickBtn: function () {
//             this.showImage = !this.showImage;
//         },

    // clickBtn(){
      
    //   console.log("Эта кнопка кликнулась")
    // }
    
    // }
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
