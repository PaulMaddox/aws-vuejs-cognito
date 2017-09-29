<template>
  <div>
    <h1>Not Authenticated</h1>
    <p>Cognito can provide a fully hosted user interface for sign-up, sign-in, account verification and forgotten password routines. This makes integrating Cognito into your applications fast and easy. The user interface can be customised with CSS overrides for lots of the components (including the logo).</p>
    <p>To see an example of the Cognito hosted user interface, use the sign-in button below:</p>
    <button @click="authenticate()" class="btn btn-outline-dark"><icon name="sign-in"></icon>Cognito Hosted UI</button>
    <br />
    <br />
    <p>It's also possible to integrate Cognito with your own user interface, allowing for a 100% custom sign-in experience.</p>
    <p>These buttons skip the hosted UI entirely, and sign-in with the federated providers directly.</p>
      <button @click="authenticate('Facebook')" class="btn btn-outline-dark"><icon name="facebook-official"></icon>Facebook</button>
      <button @click="authenticate('Google')" class="btn btn-outline-dark"><icon name="google"></icon>Google</button>
      <button @click="authenticate('LoginWithAmazon')" class="btn btn-outline-dark"><icon name="amazon"></icon>Amazon</button>
      <button @click="authenticate('GoogleApps-SAML')" class="btn btn-outline-dark"><icon name="id-card-o"></icon>SAML: Google Apps</button>
    </p>
  </div>
</template>

<script>

import auth from '../services/auth'

import 'vue-awesome/icons/sign-in'
import 'vue-awesome/icons/facebook-official'
import 'vue-awesome/icons/google'
import 'vue-awesome/icons/amazon'
import 'vue-awesome/icons/id-card-o'

export default {
  name: 'login',
  methods: {
    authenticate (provider) {
      return auth.authenticate(provider)
    }
  }
}
</script>
