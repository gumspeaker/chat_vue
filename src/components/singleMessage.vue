<template>
    <div>
        <v-row dense>
            <v-col cols="1" >
        <v-avatar color="indigo" size="36" class="left-more">
            <!-- <span class="white--text headline">{{this.owner}}}</span> -->
            <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        
            </v-col>
            <v-col cols="1" class="left">
                <p left>{{this.owner}}:</p>
                
            </v-col>
            <v-col cols="auto">
                <v-card color="" >
                 {{this.singleMessage}}
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <!-- {{this.}} -->
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name:'message',
    props:['singleMessage','owner']
}
</script>

<style>
.left{
    position: relative;
    left: 45px;
}
.left-more{
    position: relative;
    left: 100px;
}
.right{
    position: relative;
    right: 45px;
}
</style>
