<template>
  <div>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
          <user-list></user-list>
        </v-navigation-drawer>
        <v-app-bar app clipped-left>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>我的聊天室</v-toolbar-title>
        </v-app-bar>
        <v-main>
          <v-container class="fill-height d-flex" align="start" justify="start" fluid>
            <v-row>
              <v-col></v-col>
            </v-row>
            <v-row>
              <v-col cols="23">
                <v-text-field label="请发送信息" hide-details="auto" v-model="message.body"></v-text-field>
              </v-col>
              <v-col cols="1" align="center" justify="end">
                <v-btn @click="sendMessage">发送</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="text-center">
                  <v-pagination v-model="page" :length="100"></v-pagination>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
        <v-footer app>
          <span>&copy; 2020</span>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import { update, detail } from "../utils/fetch.js";
import UserList from "../components/UserList";
import Footer from "../components/Footer";
export default {
  name: "Chat",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    message: {
      body: "",
    },
    page:1
  }),
  created() {

  },

  components: {
    UserList,
    Footer,
  },
  methods: {
    sendMessage() {
      console.log(this.body);
      update("/api/sendMessage", this.message).then((res) => {
        console.log(res);
      });
      // axios.post('/api/sendMessage',stringify(this.body)).then(res=>{
      //   console.log(res)
      // })
    },
  },
};
</script>

<style>
</style>
