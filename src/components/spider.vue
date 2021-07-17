<template>
  <img class="web" @click="show = !show" src="../assets/left_web.png" />

  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <img class="spider" src="../assets/spider.png" v-if="show" />
  </transition>
</template>

<script>
export default {
  name: "spider",

  props: {},
  data() {
    return {
      show: true,
    };
  },
  computed: {},

  methods: {},
};
</script>

<style lang="scss">
.web {
  width: 200px;
  height: 180px;
  position: absolute;
  z-index: 12000;
}
.spider {
  width: 200px;
  height: 180px;
  position: absolute;
  z-index: 11000;
}
</style>
