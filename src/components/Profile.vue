<template>
    <div class="header">
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!isAuthenticated" @click="authenticate()">Sign in</li>
        <li v-if="isAuthenticated" @click="signout()">Sign out</li>
      </ul>
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
