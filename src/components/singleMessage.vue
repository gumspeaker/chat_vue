<template>
    <div>
        <v-row dense no-gutters>
            <v-col cols="1" align="center">
                <v-avatar color="indigo" size="36">
                    <!-- <span class="white--text headline">{{this.owner}}}</span> -->
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
            </v-col>
            <!-- align="center" 可以让日期拉到最后-->
            <v-col cols="10" >
                <v-row>
                    <p>{{this.singleMessage.owner}}:</p>
                </v-row>
                <v-row class="top r-10" align="end">
                    <v-col cols="auto">
                        <template v-if="this.singleMessage.type=='normal'">
                            <v-card color="blue">
                                <p>{{this.singleMessage.body}}</p>
                            </v-card>
                        </template>
                        <template v-if="this.singleMessage.type=='pic'">
                            <v-card color="dark">
                                <v-img
                                    :src="imageUrl"
                                    max-width="300"
                                    
                                    placeholder=""
                                    contain
                                >
                                    <template v-slot:placeholder>
                                        <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                        >
                                            <v-progress-circular
                                                indeterminate
                                                color="grey lighten-5"
                                            ></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-card>
                        </template>
                    </v-col>
                    <v-col  class="top" justify="center">{{this.formatDate}}</v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      // imageUrl:process.env.VUE_APP_BASE_URL+'api/image/'+this.singleMessage.body
      //date:new Date(this.singleMessage.date)
    };
  },
  props: ["singleMessage"],
  computed: {
    imageUrl: function() {
      return (
        process.env.VUE_APP_BASE_URL + "api/image/" + this.singleMessage.body
      );
    },
    formatDate: function() {
      let date = new Date(this.singleMessage.date);
      return (
        date.getMonth() +
        "月" +
        date.getDate() +
        "日" +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    },
  },
  methods: {
  },
};
</script>

<style>
.left {
  position: relative;
  left: 60px;
}
.left-more {
  position: relative;
  left: 100px;
}
.right {
  position: relative;
  right: 45px;
}
.top {
  position: relative;
  bottom: 15px;
}
.top-20 {
  top: 30px;
}
.r-10 {
  right: 10px;
}
.mt-15 {
  margin-top: 1px;
}
.mb-15 {
  margin-bottom: 1px;
}
.col {
  padding-bottom: 0px;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
