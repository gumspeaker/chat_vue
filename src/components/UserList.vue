<template>
    <div>
        <v-list >
          <!-- <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content> -->
          </v-list-item>
          <v-list-item v-for="user in userList" :key="user.userId" @click="">
           
            <v-avatar>
              <v-icon>mdi-cog</v-icon>
            </v-avatar>
            <v-list-item-content right>
              <v-list-item-title>{{user.userName}}</v-list-item-title>
            </v-list-item-content>
          
          </v-list-item>
       
        </v-list>
    </div>
</template>

<script>
export default {
  data(){
    return {
      userList:[
        { 
          userId:0,
          userName: 'cherry',
        },        
        { 
          userId:1,
          userName: 'cherry',
        },
        { 
          userId:2,
          userName: 'cherry',
        }
      ]
    }
  },
  props:['message']
}
</script>

<style>

</style>
