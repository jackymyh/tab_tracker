<template>
  <v-toolbar fixed dark color="teal">
    <v-toolbar-title>
      <v-icon dark>audiotrack</v-icon>
      Tab Tracker
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        class="ml-4"
        to="/songs">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        v-if="!$store.state.isUserLoggedIn"
        to="/login">
        Login
      </v-btn>
      <v-btn
        flat
        v-if="!$store.state.isUserLoggedIn"
        to="/register">
        Sign Up
      </v-btn>
      <v-btn
        flat
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
        name: 'Songs'
      })
    }
  }
}
</script>

<style scoped>

</style>
