<template>
    <div>
    <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped>
        <user-list></user-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>我的聊天室</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid>

        </v-container>
      </v-main>
              <v-footer app>
            <span>&copy; 2020</span>
      </v-footer>
      <Footer></Footer>
    </v-app>
  </v-app>
</div>
    </div>
</template>

<script>
import UserList from '../components/UserList'
import Footer from '../components/Footer'
export default {
  name: 'App',
   props: {
    source: String,
  },data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = true
  },

  components: {
    UserList,
    Footer
  },
};
</script>

<style>

</style>
