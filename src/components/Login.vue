<template>
  <div>
    <h1>Not Authenticated</h1>
    <p>To sign in with AWS Cognito hosted UI, <a href="#" @click="authenticate()">click here</a>.</p>
    <p>The links below are an example of signing in with federated providers, using a custom UI:</p>
    <a href="#" @click="authenticate('Facebook')">Facebook</a>, 
    <a href="#" @click="authenticate('Google')">Google</a>, 
    <a href="#" @click="authenticate('LoginWithAmazon')">Amazon</a>
  </div>
</template>

<script>

import auth from '../services/auth'

export default {
  name: 'login',
  methods: {
    authenticate (provider) {
      return auth.authenticate(provider)
    }
  }
}
</script>