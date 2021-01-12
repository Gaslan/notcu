<template>
  <div id="app">
    <div class="todo-app">
      <Sidebar />
      <Middlebar />
      <Content />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Middlebar from './components/Middlebar';
import Content from './components/Content';
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Sidebar,
    Middlebar,
    Content
  },
  created() {
    this.getAllNotes()
  },
  methods: {
    ...mapActions(['getAllNotes'])
  }
}
</script>

<style>
@import './assets/css/all.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.todo-app{
  width: 100%;
  height: 100vh;
}
</style>
