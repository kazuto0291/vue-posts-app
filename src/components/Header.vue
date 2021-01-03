<template>
  <header class="header">
    <h1 class="logo">Vue Hacks</h1>
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  height: 60px;
  position: fixed;
  background-color: #3DAF7C;
  width: 100%;
  z-index: 1;
}

.logo {
  margin: 0;
  line-height: 60px;
  color: #fff;
  padding-left: 10px;
}

</style>
