<template>
  <div>
    <h1>Authenticating...</h1>
  </div>
</template>

<script>

import store from '../store'
export default {
  created () {
    var accessToken = this.$route.hash.match(/(?:access_token)=([^&]+)/)[1]
    var idToken = this.$route.hash.match(/(?:id_token)=([^&]+)/)[1]
    var verification = this.$route.hash.match(/(?:state)=([^&]+)/)[1]
    var expiresIn = this.$route.hash.match(/(?:expires_in)=(\d+)/)[1]
    store.dispatch('authenticate', {
      accessToken: accessToken,
      idToken: idToken,
      verification: verification,
      expiresIn: expiresIn
    })
  }
}

</script>