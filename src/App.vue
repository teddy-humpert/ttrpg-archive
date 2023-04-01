<template>
  <div id="app">
    <header>
      <h1>TTRPG Archive</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/books">All Books</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <AppMessage v-if="$store.state.message.length" />
  </div>
</template>

<script>
import AppMessage from "./components/AppMessage.vue";

export default {
  name: "App",
  components: {
    AppMessage
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}

header {
  background-color: #f1faee;
  color: #27612f;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

nav {
  font-size: 1.16rem;
  background-color: #27612f;
  color: #f1faee;
}

nav a {
  text-decoration: none;
  color: #f1faee;
  padding: 0 13px;
}

nav a:first-child {
  padding-left: 30px;
}

nav a:hover {
  text-decoration: none;
  color: #27612f;
  background-color: #f1faee;
  padding: 0 13px;
  box-shadow: 0 0 5px #1d3557;
}

nav a:hover:first-child {
  padding-left: 30px;
}

header h1 {
  text-align: left;
  padding-left: 30px;
}

main {
  overflow: scroll;
}
</style>
