<template>
  <div id="app">
   <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
   
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
</style>
