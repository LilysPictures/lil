<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
    <div class="v-btn" 
  :class="className"
  @click="click"
  >
  <!-- <i class="material-icons" v-if="prependIcon">{{prependIcon}}</i> -->
 
    <!-- <button > {{title}} </button> -->
    <!-- <i class="material-icons" v-if="appendIcon">{{appendIcon}}</i> -->

<div class="switch">
    <label>
      Off
      <input type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>
  
  </div>

</template>

<script>

export default {
  name: "v-btn",
  
props: {

    title: {
     type: String,
      default: 'Press'
    },
    disabled: {
        type: Boolean,
        default: false
    },
     error: {
        type: Boolean,
        default: false
    },
     success: {
        type: Boolean,
        default: false
    },
    appendIcon: {
        type: String,
        default: ""
    },
    prependIcon: {
        type: String,
        default: ""
    },

},
data(){
    return{
      boolean: true
    }
    
},
computed: {
  className() {
    return{
      'v-btn__disabled': this.disabled,
      'v-btn__error': this.error,
      'v-btn__success': this.success
    }
  }
},

methods: {
click(){
    this.$emit('click')
}
}
}
</script>


<style lang="scss">
.v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
//  background-color: red;
//  border-radius: 100%;
//  border: none;
//     color: white;
    // padding: 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    // margin-right: 5%;
    float: right;
   cursor: pointer;

  &:hover {
     background: #ffee;
 }

  &:_disabled {
     pointer-events: none;
}
  &__error {
     background: green;
}
 &__success {
     background: blue;
}
.fa {
  height: 50px;
}



}

</style>