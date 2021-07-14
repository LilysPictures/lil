<template>
  <span class="back">
    <router-link :to="{name: 'Home'}"> <img src="../assets/back.png" style="width: 80px; margin-left:2%; margin-top:2%; position: absolute"/> </router-link> 
  </span>

  <div class="osya">
  <img src="../assets/01.jpg" style="width: 80%; display: block; margin-left:auto; margin-right: auto"/>
     </div>

  
</template>


<script>
export default {
name: "Osya",
data(){
  return{  }
 },
methods: {
 }

}
</script>

<style>

.back:hover {

  opacity: .8;
}
</style>