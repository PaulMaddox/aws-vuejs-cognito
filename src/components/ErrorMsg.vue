<template>
  <div>
    <h1>Error</h1>
    <p>An error occurred while processing the request.</p>
    <pre>{{message}}</pre>
  </div>
</template>

<script>
export default {
  name: 'error',
  computed: {
    message () {
      return this.$route.params.message
    }
  }
}
</script>