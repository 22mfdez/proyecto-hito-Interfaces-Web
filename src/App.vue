<template>
  <div>
    <HelloWorld msg="Hola mundo Proyecto Vue"/>
    <nav>
      <router-link to="/view1">View 1</router-link>
      <router-link to="/view2">View 2</router-link>
      <router-link to="/view3">View 3</router-link>
      <router-link to="/view4">View 4</router-link>
      <router-link to="/view5">View 5</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, 

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: #646ac4fb;
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
}

</style>
