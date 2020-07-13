<template>
  <div>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
          <user-list></user-list>
        </v-navigation-drawer>
        <v-app-bar app clipped-left>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>我的聊天室</v-toolbar-title>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="100"
              :total-visible="10"
              :page="page"
              @input="changePage"
            ></v-pagination>
          </div>
        </v-app-bar>
        <v-main>
          <v-container
            class="fill-height d-flex"
            align="start"
            justify="start"
            fluid
            style="height: 100%"
          >
            <v-row v-for="(item,name,index) in messageData" :key="index" :dense="dense">
              <v-col>
                <single-message :singleMessage="item"></single-message>
              </v-col>
            </v-row>
            <v-row>
              <v-col></v-col>
            </v-row>
            <v-row class="p-f" >
              <v-col cols="22">
                <v-text-field label="请发送信息" hide-details="auto" v-model="message.body"></v-text-field>
              </v-col>
              <v-col cols="1" align-self="end" justify-self="start" >
                <v-btn @click="sendMessage">发送</v-btn>
              </v-col>
              <v-col cols="1" align-self="end" justify="end">
                <input
                  type="file"
                  ref="fileInput"
                  accept="image/*"
                  @change="getFile"
                  style="display: none"
                >
                <v-tooltip top>
                  <template v-slot:activator="{ on}">
                    <v-btn v-on="on" @click="sendImage">发图</v-btn>
                  </template>
                  <span>图片大小最好不要过1M</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
        <v-footer app>
          <span>用户名称：{{username}}</span>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import img from "../assets/logo.png";
import { stringify } from "qs";
import singleMessage from "../components/singleMessage";
import { update, detail, updateImage } from "../utils/fetch.js";
import UserList from "../components/UserList";
import Footer from "../components/Footer";
export default {
  name: "Chat",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    username: localStorage.getItem("username"),
    message: {
      body: "",
    },
    imageFormData: new FormData(),
    getOtherMessage: null,
    messageData: [],
    page: 1,
    file: { file: img },
    dense: true,
    websock: null,
  }),
  created() {
    // console.log(process.env)
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    //console.log(username)
    update("/checkUser", { token: token, username: username })
      .then((res) => {
        //console.log(res.data)
        this.$store.commit("Login", { token: token, username: username });
      })
      .catch((err) => {
        // console.log(err)
        this.$router.push("/login");
      });
    detail("/api/getNewMessage", { page: this.page - 1 }).then((res) => {
      //console.log(res)
      this.messageData = res.data.data.reverse();
    }),
      this.initWebsocket();
  },
  watch: {
    getOtherMessage: function(param) {
      if (this.page == 1) {
        if (this.messageData.length >= 10) this.messageData.shift();
        this.messageData.push(param);
      }
    },
  },

  components: {
    UserList,
    Footer,
    singleMessage,
  },
  methods: {
    sendMessage() {
      //console.log(this.message);
      if (this.message.body == "" || this.message.body == null)
        window.alert("message不能为空");
      else
        return update("/api/sendMessage", this.message)
          .then((res) => {
            //console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .then((this.message.body = ""));
    },
    sendImage() {
      this.$refs.fileInput.click();
    },
    getFile(event) {
      let file = event.target.files[0];
      console.log(file.name);
      file.name.replace(/\.[^/.]+$/, ".png");
      // console.log(file)
      //可能存在上次的file文件仍然存在在imageFormData里，因为formData是长期存在的，所以要删除前一次的数据
      if (this.imageFormData.has("file")) this.imageFormData.delete("file");
      this.imageFormData.append("file", file);
      // console.log(event)        //只有一个文件
      if (file.name.lastIndexOf(".") <= 0) {
        return alert("Please add a valid image!"); //判断图片是否有效
      }
      updateImage("/api/uploadImage", this.imageFormData)
        .then((result) => {
          // console.log(result)
        })
        .catch((err) => {});
    },
    changePage(myPage) {
      detail("/api/getNewMessage", { page: myPage - 1 }).then((res) => {
        if (res.data.data == "没有消息了") window.alert("没有消息了");
        else this.messageData = res.data.data.reverse();
      });
    },
    initWebsocket() {
      this.websock = new WebSocket(process.env.VUE_APP_WEBSOCK_WS + "/test");
      this.websock.onerror = function(event) {
        //console.log(event);
      };
      this.websock.onmessage = (event) => {
        // console.log(this.messageData)
        //console.log(event)

        this.getOtherMessage = JSON.parse(event.data);
      };
    },
  },
};
</script>

<style>
.p-f {
  position: fixed;
  bottom: 39px;
  width: 100%;
}
</style>
