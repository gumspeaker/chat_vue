<template>
    <div>
        <v-row dense>
            <v-col cols="1" class="left">
        <v-avatar color="indigo" size="36" >
            <!-- <span class="white--text headline">{{this.owner}}}</span> -->
            <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        
            </v-col>
            <v-col cols="auto" >
                <v-row>
                <p >{{this.singleMessage.owner}}:</p>
                </v-row>
                <v-row class="top">
                    <v-col cols="auto" >
                    <template v-if="this.singleMessage.type=='normal'">
                    <v-card color="blue" >
                   <p style="margin : 10px 10px 10px 10px"> {{this.singleMessage.body}}</p>
                    </v-card>
                    </template>
                    <template v-if="this.singleMessage.type=='pic'">
                        <v-card color="blue">
                            <v-img :src=imageUrl          
                            max-width="500"
                            placeholder
                            max-height="300">
                            <template v-slot:placeholder>
                            <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                            </template>
                            </v-img>
                            </v-card>
                        </template>    
                    </v-col>
                <v-col right >
                    {{this.formatDate}}
                </v-col>
                </v-row>
            </v-col>
            <!-- <v-col cols="auto">
                <template v-if="this.singleMessage.type=='normal'">
                <v-card color="blue" >
                 {{this.singleMessage.body}}
                </v-card>
                </template>
                <template v-if="this.singleMessage.type=='pic'">
                    <v-card color="blue">
                        <img :src=imageUrl  height="300px"/>
                    </v-card>
                </template>    
            </v-col>
            <v-col right>
                {{this.formatDate}}
            </v-col> -->
        </v-row>
    </div>
</template>

<script>
export default {
    name:'message',
    data(){
        return{
            // imageUrl:process.env.VUE_APP_BASE_URL+'api/image/'+this.singleMessage.body
            //date:new Date(this.singleMessage.date)
        }
    },
    props:['singleMessage'],
    computed:{
        imageUrl:function(){
            return  process.env.VUE_APP_BASE_URL+'api/image/'+this.singleMessage.body  
        },
        formatDate:function(){
            let date = new Date(this.singleMessage.date)
             return date.getFullYear()+'年'+date.getMonth()+'月'+date.getDate()+'日'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            
        }
    },
    methods:{
        changeToPng(){
            if(this.singleMessage.type='pic')
            console.log()
        }
    }
}
</script>

<style>
.left{
    position: relative;
    left: 60px;
}
.left-more{
    position: relative;
    left: 100px;
}
.right{
    position: relative;
    right: 45px;
}
.top{
    position: relative;
    bottom: 20px;
}
</style>
