<template>
  <v-toolbar fixed dark color="teal">
    <v-toolbar-title>
      <v-btn flat
        to="/">
        <v-icon>audiotrack</v-icon>
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat
        to="/songs">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat
        v-if="!$store.state.isUserLoggedIn"
        to="/login">
        Login
      </v-btn>
      <v-btn flat
        v-if="!$store.state.isUserLoggedIn"
        to="/register">
        Sign Up
      </v-btn>
      <v-btn flat
        v-if="$store.state.isUserLoggedIn"
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default{
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>

</style>
