<template>
  <btn @click="clickBtn" />
  <transition name="fade">
    <div class="BG" v-if="showImage"></div>
  </transition>

  <router-link :to="{ name: 'Osya' }" class="bookcover">
    <img src="@/assets/Osya.png" />
  </router-link>
  <spider />
  <ghost />
</template>

<script>
import Btn from "@/components/btn";
import spider from "@/components/spider";
import ghost from "@/components/ghost";

export default {
  name: "Home",
  components: { Btn, spider, ghost },
  data() {
    return {
      showImage: false,
      show: true,
    };
  },
  methods: {
    clickBtn: function () {
      this.showImage = !this.showImage;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.BG {
  font-family: "Frijole", cursive;
  width: 100vw;
  height: 91vh;
  margin: 0;
  background: url(../assets/BG_MM_InversGraff.jpg) center no-repeat fixed;
  background-size: cover;
  position: absolute;
  z-index: 10000;
}
.bookcover img {
  width: 200px;
  height: 180px;
  margin-left: 10vw;
  margin-top: 20vh;
  position: absolute;
}
</style>
