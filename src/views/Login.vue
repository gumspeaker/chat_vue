<template>
<div id="app">
  
    <v-app id="inspire">
      <v-main>
        <v-container
          class="fill-height"
          fluid>
           <Alert :alertConfig="alertConfig"></Alert>
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
                  <v-tooltip top>
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
                  <Form :userInfo="user" :formType="formType"></Form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="sendReq">{{formType}}</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <!-- <v-row>
            <waifu></waifu>
          </v-row> -->
        </v-container>
      </v-main>
    </v-app>
</div>
</template>

<script>
import Alert from '../components/Alert'
import Form from '../components/Form'
import {update,detail} from '../utils/fetch.js'
import { urlencoded } from 'body-parser';
// import Waifu from '../components/wife'
export default {
    name:'LoginForm',
    components:{
      Form,
      Alert
      // Waifu
    },
    props:{
        source: String
    },
    created(){
      //console.log(process.env)
    },
    data(){
        return{
             formBarName:'登录',
             btnType:'注册',
            formType:'登录',
            user:{username:'',password:''},
            alertConfig:{
              display:false,
              message:'',
              type:'success'
            }    
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
      Login(){
          update('/login',this.user).then(res=>{
            //console.log(res)
          let token = res.data.data[1]
          let username = res.data.data[0]
          this.alertConfig={
              display:true,
              message:'登陆成功',
              type:'success'
            }    
          this.$store.commit('Login', {'token':token ,'username':username})
          this.$router.push('/main')
        }).catch(err=>{
          console.log(err)
              this.alertConfig={
              display:true,
              message:'登陆失败',
              type:'error'
            }   
             return {'token':err.token,'username':err.username}
        })
      },
      Sign(){
        update('/sign',this.user).then(res=>{
         // console.log(res)
            if(res.data.rspCode=="200")
              this.alertConfig={
              display:true,
              message:'注册成功',
              type:'success'
            }   
            else{
              this.alertConfig={
              display:true,
              message:res.data.data,
              type:'error'
            }   
            }
        })
      },  
      sendReq(){
        if(this.formType=='登录')
          this.Login();        
        else
          this.Sign();
      
      }
}
}
</script>

<style>

</style>
