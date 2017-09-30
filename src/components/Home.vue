<template>
  <div>

    <h1>Hello {{firstname}}</h1>
    <p>You have successfully signed in with Cognito User Pools.</p>

    <h2>Profile</h2>
    <p></p>
    <div class="code">
      <pre>{{profile}}</pre>
    </div>

    <h2>Access Token</h2>
    <div class="code">
      <pre>{{accessToken}}</pre>
    </div>

    <h2>ID Token</h2>
    <div class="code">
      <pre>{{idToken}}</pre>
    </div>

    <h2>Amazon API Gateway with Cognito authorization</h2>
    <p>
      Below is an live example of an authenticated API request.<br />
      The API has been setup with a Cognito Authorizer, as per <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html#apigateway-enable-cognito-user-pool" target="_blank">this guide</a>.
    </p>
    <div class="code">
      <pre>{{response}}</pre>
    </div>

    <h2>Source Code</h2>
    <p>The full source code for this example application is available here:</p>
    <a href="https://github.com/paulmaddox/aws-vuejs-cognito" target="_blank">https://github.com/paulmaddox/aws-vuejs-cognito</a>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
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
    },
    firstname () {
      return this.$store.getters.profile.name.split(' ')[0]
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