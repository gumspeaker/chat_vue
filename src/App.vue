<template>
  <div class="max">
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    this.$store.commit('init')
  }
}
</script>
<style>
.max{
  width:100%;
  height: 100%;
  /* background-color: red; */
}

</style>

