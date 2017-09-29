<template>
  <div>
    
    <h1>Hello {{profile.name}}</h1>
    <p>You have successfully logged authenticated with Cognito User Pools.</p>

    <h2>Profile:</h2>
    <p></p>
    <div class="code">
      <pre>{{profile}}</pre>
    </div>

    <h2>Access Token:</h2>
    <div class="code">
      <pre>{{accessToken}}</pre>
    </div>

    <h2>ID Token:</h2>
    <div class="code">
      <pre>{{idToken}}</pre>
    </div>

    <h2>Amazon API Gateway with Cognito authorization</h2>
    <span>Below is an live example of an authenticated API request:</span>
    <div class="code">
      <pre>{{response}}</pre>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data: function () {
    return {
      response: 'unknown'
    }
  },
  computed: {
    accessToken () {
      return this.$store.getters.accessToken
    },
    idToken () {
      return this.$store.getters.idToken
    },
    profile () {
      return this.$store.getters.profile
    }
  },
  created () {
    var http = axios.create({
      baseURL: process.env.AUTH_TEST_API_ENDPOINT,
      headers: {
        Authorization: this.$store.getters.idToken
      }
    })

    http.post('/ping')
      .then(response => {
        this.response = response
      })
      .catch(err => {
        this.response = err
      })
  }
}
</script>

<style>

.code {
  display: inline-block;
  padding-top: 0px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
}

.code pre {
    margin-right: 56px;
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

</style>