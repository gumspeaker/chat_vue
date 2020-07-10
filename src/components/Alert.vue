<template>
    <div>
         <v-alert class="alert" v-model="alertConfig.display"  :type="alertConfig.type" dismissible  > 
             {{this.alertConfig.message}}
             </v-alert>
    </div>
</template>

<script>
export default {
    props:['alertConfig']
}
</script>

<style>
.alert{
  position: fixed;
  width: 300px;
  top: 50px;
  right: 40%;
}
</style>
