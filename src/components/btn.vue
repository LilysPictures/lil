<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div class="btn" @click="click">
    <div class="switch">
      <label>
        Off
        <input type="checkbox" />
        <span class="lever"></span>
        On
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "btn",
  data() {
    return {
      boolean: true,
    };
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.btn {
  position: absolute;
  z-index: 12000;
  margin-left: 90vw;
}
</style>
