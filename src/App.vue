<template>
  <div id="app">
    <Header></Header>
    <div class="containre">
    <SideMenu></SideMenu>
    <Main></Main>
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import Header from './components/Header';
import Main from './components/Main';
import SideMenu from './components/SideMenu';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    SideMenu
  }
}
</script>

<style>
#app {
  /* height: 1900px; */
}

.containre {
  display: flex;
  padding-top: 60px;
}
</style>
