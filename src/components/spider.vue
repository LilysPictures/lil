<template>
  <img
    @click="show = !show"
    src="../assets/left_web.png"
    style="width: 200px; height: 180px; position: absolute; z-index: 12000"
  />

  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <img
      src="../assets/spider.png"
      style="width: 200px; height: 180px; position: absolute; z-index: 11000"
      v-if="show"
    />
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

<style lang="scss"></style>
