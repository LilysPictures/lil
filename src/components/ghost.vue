<template>
  <div class="ghost">
    <img src="../assets/ghost.png" alt="ghost" id="idGhost" />
  </div>
</template>

<script>
export default {
  name: "ghost",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.ghost img {
  width: 300px;
  height: 300px;
  bottom: 0;
  position: absolute;
  z-index: 12000;
}
</style>
