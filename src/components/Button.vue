<template>
  <button
    class="button"
    :class="{disabled: !clickable}"
    @click="onClick"
    :disabled="!clickable"
    >
    {{title}}
  </button>
</template>

<script>
export default {
  name:'Button',
  props: {
    title: {
      type:String,
      default: "ボタン"
    },
    onClick:{
      type:Function,
      // 必ずセットされる
      required:true
    },
    clickable: {
      type: Boolean,
      required:false,
      default: true
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  background-color: red;
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
}
.button:hover {
  background: rgb(182, 0, 0);
}

.button:active {
  background: rgb(138, 13, 13);
}

.disabled {
  opacity: 0.3;
}
</style>