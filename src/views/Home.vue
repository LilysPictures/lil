<template>

    <v-btn
      @click="clickBtn"
     style="margin-right:0"
  />
  <transition name="fade">
    <div class="BG" v-if='showImage'> </div>
</transition>
</template>

<script>
import vBtn from '@/components/v-btn'

export default {
  
  
name: "Home",

components: { vBtn },

data(){
  return{
      showImage: false,  
       show: true,
     }
 
},
methods: {
  clickBtn: function () {
            this.showImage = !this.showImage;
        },
}

}
</script>


<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.BG {
font-family: 'Frijole', cursive;
 width: 100vw;
  height: 100vh;
  margin: 0; 
  background: url(../assets/BG_MM_InversGraff.jpg) center no-repeat fixed;
  background-size: cover;
  position: absolute;
 z-index: 1000;
}

.v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    float: right;
   cursor: pointer;
z-index: 1100;
position: absolute;
}

</style>