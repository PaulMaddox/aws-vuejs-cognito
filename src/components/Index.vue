<template>
  <div>
    <h1>Hello {{name}}</h1>
    Access Token:
    <div class="code">
      <pre>{{accessToken}}</pre>
    </div>
    ID Token:
    <div class="code">
      <pre>{{idToken}}</pre>
    </div>
    <span>Below is an live example of an authenticated API request:</span>
    
    <div class="code">
      <pre>{{response}}</pre>
    </div>
  </pre>

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
    name () {
      return this.$store.getters.profile.name
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
        console.log(response)
        this.response = response
      })
      .catch(err => {
        console.log(err)
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