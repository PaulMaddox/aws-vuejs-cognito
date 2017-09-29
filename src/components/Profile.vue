<template>
    <div class="header">
        <a v-if="!isAuthenticated" @click="authenticate()">Sign in</a>
        <a v-if="isAuthenticated" @click="signout()">Sign out</a>
    </div>
</template>

<script>
import auth from '../services/auth'
export default {
  name: 'profile',
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    authenticate () {
      auth.authenticate()
    },
    signout () {
      this.$store.dispatch('signout').then(() => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>

<style>

.header {
  float: right;
  line-height: 56px;
  vertical-align: middle;
}

.header a {
  line-height: 56px;
  font-size: 16px;
  text-decoration: none;
  color: #ffffff;
}

</style>
