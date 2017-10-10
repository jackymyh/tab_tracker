<template>
  <v-toolbar fixed dark color="teal">
    <v-toolbar-title>
      <v-btn flat
        @click="navigateTo({name: 'Home'})">
        <v-icon>Tab Tracker</v-icon>
      </v-btn>
    </v-toolbar-title>
    <v-btn flat>
      Browse
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat
      v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'Login'})">
      Login
    </v-btn>
    <v-btn flat
      v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'Register'})">
      Sign up
    </v-btn>
  </v-toolbar>
</template>

<script>
export default{
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
