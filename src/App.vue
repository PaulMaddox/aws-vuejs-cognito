<template>
  <div id="app">
    <header>
        <img src="./assets/logo.png" alt="AWS">
        <span>AWS Cognito with Vue.js</span>
        <profile></profile>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
export default {
  name: 'app',
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    }
  },
  components: {
    Profile
  }
}
</script>

<style> 
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 40px;
  margin-left: 56px;
}

.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
} 

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #252F3E;
  color: #ffffff;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}

header img {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  padding-top: 16px;
}

header span {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  padding-left: 16px;
  padding-top: 12px;
}

</style>
