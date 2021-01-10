<template>
  <main class="main-container">
    <TextBox />
    <div class="devider"></div>
  </main>
</template>

<script>
import TextBox from './TextBox.vue'

export default {
  name:'Main',
  components:{
    TextBox
  }
}
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
  }

  .devider {
    border-top: 10px solid gray;
  }
</style>