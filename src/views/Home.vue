<template>

<v-btn
    @click="clickBtn"
  
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
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.BG {
  font-family: 'Frijole', cursive;
  width: 100vw;
  height: 91vh;
  margin: 0; 
  background: url(../assets/BG_MM_InversGraff.jpg) center no-repeat fixed;
  background-size: cover;
  position: absolute;
  z-index: 10000;
}

.v-btn {
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  float: right;
  cursor: pointer;
  z-index: 11000;
  position: absolute; */
}

</style>