<template>
  <div>
    <h1>Not Authenticated</h1>
    <p><a href="https://aws.amazon.com/cognito" target="_blank">Amazon Cognito</a> lets you easily add user sign-up and sign-in to your mobile and web apps. With <a href="https://aws.amazon.com/cognito" target="_blank">Amazon Cognito</a>, you also have the options to authenticate users through social identity providers such as Facebook, Twitter, or Amazon, with SAML identity solutions, or by using your own identity system.</p>
    <p><a href="https://aws.amazon.com/cognito" target="_blank">Amazon Cognito</a> can provide a fully hosted user interface for sign-up, sign-in, account verification and forgotten password routines. This makes securing your Vue.js applications quick and easy. The user interface can be customised with CSS overrides for lots of the components (including the logo).</p>
    <p>To see an example of the <a href="https://aws.amazon.com/cognito" target="_blank">Amazon Cognito</a> hosted user interface, use the sign-in button below:</p>
    <button @click="authenticate()" class="btn btn-outline-dark"><icon name="sign-in"></icon>Cognito Hosted UI</button>
    <br />
    <br />
    <p>
      It's also possible to integrate Cognito with your own user interface, allowing for a 100% custom sign-in experience.<br />
      These buttons skip the hosted UI entirely, and sign-in with the federated providers directly.
    </p>
    <p>
      <button @click="authenticate('Facebook')" class="btn btn-outline-dark"><icon name="facebook-official"></icon>Facebook</button>
      <button @click="authenticate('Google')" class="btn btn-outline-dark"><icon name="google"></icon>Google</button>
      <button @click="authenticate('LoginWithAmazon')" class="btn btn-outline-dark"><icon name="amazon"></icon>Amazon</button>
      <button @click="authenticate('GoogleApps-SAML')" class="btn btn-outline-dark"><icon name="id-card-o"></icon>SAML: Google Apps</button>
    </p>

    <p>Once signed in, you'll see details (and live examples) of how to use <a href="https://aws.amazon.com/cognito" target="_blank">Amazon Cognito</a> and <a href="https://aws.amazon.com/api-gateway/" target="_blank">Amazon API Gateway</a> to secure access to your backend APIs too.</p>

    <p>
      The full source code for this example application is available here:<br />
      <a href="https://github.com/paulmaddox/aws-vuejs-cognito" target="_blank">https://github.com/paulmaddox/aws-vuejs-cognito</a>
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
