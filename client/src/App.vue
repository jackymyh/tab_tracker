<template>
  <v-app>
    <v-toolbar/>
    <main>
      <v-content class="mt-4">
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import vToolbar from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    vToolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert{
  color: red
}
</style>
