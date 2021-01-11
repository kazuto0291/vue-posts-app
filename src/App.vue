<template>
  <div id="app">
    <Header></Header>
    <div class="containre">
    <SideMenu></SideMenu>
    <main class="main-container">
      <!-- <Main></Main> -->
      <router-view></router-view>
    </main>
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

export default {
  name: 'App',
  components: {
    Header,
    SideMenu
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

.containre {
  display: flex;
  padding-top: 60px;
}
</style>
