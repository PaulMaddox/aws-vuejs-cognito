<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-left" href="/"><img src="./assets/logo.png"></a>
          <div class="navbar-brand navbar-text d-none d-sm-inline">
            <a class="navbar-brand" href="/">Amazon Cognito with Vue.js</a>
          </div>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <profile></profile>
        </ul>
      </div>
    </nav>
    <div class="container">
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile'

export default {
  name: 'app',
  components: {
    Profile
  }
}
</script>

<style> 

body {
  margin: 0px;
}

.container {
  margin-top: 28px;
  margin-bottom: 28px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 
  
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 

} 

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  /* .container{
      max-width: 970px;
  } */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {

}

.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
} 

h1, h2 {
  font-weight: normal;
  padding-bottom: 16px;
}

a {
  color: #35495E;
}

nav {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #252F3E;
  color: #ffffff;
}

.navbar-brand {
  color: #ffffff;
}

nav a:hover{
    color: inherit; /* Inherits color property from its parent */
}

nav img {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  margin-right: 16px;
}

pre {
  font-size: 10px !important;
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

.btn {
  vertical-align: middle;
  margin: 4px;
}

.btn .fa-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.btn .fa-icon:last-child {
  vertical-align: middle;
  margin-right: 8px;
}

</style>
