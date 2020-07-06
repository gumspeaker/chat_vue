<template>
<div id="app">
    <v-app id="inspire">
      <v-main>
        <v-container
          class="fill-height"
          fluid>
          <v-row
            align="center"
            justify="center">
            <v-col
              cols="12"
              sm="8"
              md="4">
              <v-card class="elevation-12">
                <v-toolbar
                  dark
                  flat
                >
                  <v-toolbar-title>{{formBarName}}</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :href="source"
                        target="_blank"
                        v-on="on"
                        @click="changeFormType"> 
                       {{btnType}}
                      </v-btn>
                    </template>
                    <span>切换至{{btnType}}</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                      color="dark"
                      v-model="user.username"
                      autocomplete="on"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="user.password"
                      autocomplete="off"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="sendReq">{{formType}}</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
</div>
</template>

<script>
import {update,detail} from '../utils/fetch.js'
export default {
    name:'LoginForm',
    props:{
        source: String
    },
    data(){
        return{
             formBarName:'登录',
             btnType:'注册',
            formType:'登录',
            user:{username:'',password:''}    
        }
    },
    watch:{
        formType:function(val){
            this.btnType=(val=='登录')?'注册':'登录';
            this.formBarName=val;
        }
    },
    methods: {
    changeFormType(){
        this.formType=this.formType=='登录'?'注册':'登录'
        },
        
    sendReq(){
      if(this.formType=='登录'){
     update('/login',this.user).then(res=>{

       let token=res.data.data[1]
       let username=res.data.data[0]
       console.log(username)
       this.$store.commit('Login', {'token':token ,'username':username})

       this.$router.push('/main')
     }).catch(err=>{
       console.log(err)
     })
      }
      else{
        update('/sign',this.user).then(res=>{
          //console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }
      
    }
}
}
</script>

<style>

</style>
