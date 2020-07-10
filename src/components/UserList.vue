<template>
    <div>
        <v-list >
          <v-list-item>
            <span>用户列表</span>
          </v-list-item>
          <v-list-item v-for="(user,index) in userList" :key="index" @click="" >
        <v-avatar color="indigo" size="36" >
            <!-- <span class="white--text headline">{{this.owner}}}</span> -->
            <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
            <v-list-item-content right>
              <v-list-item-title>{{user.username}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </div>
</template>

<script>
import { update, detail } from "../utils/fetch.js"
export default {
  data(){
    return {
      userList:[],
      isMine:true
    }

  },
  created(){
    this.getUserList();
  },
  methods:{ 
    getUserList(){
      detail('/getAllUser',).then((res) => {
        // console.log(res.data.data)
        this.userList=res.data.data
      }).catch((err) => {
        
      });
    },
    // getUserInList:()=>{
    //   return true
    // }
  }
}
</script>

<style>

</style>
