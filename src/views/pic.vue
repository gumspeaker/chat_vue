<template>
<div>
    <input type="file" ref="clearFile" 
    @change="getFile($event)" 
    multiple="multiplt" 
     >
     
    <button @click="send">fasong</button>
</div>
</template>

<script>
export default {
    data(){
        return {
            formData:new FormData()
        }
    },
    methods:{
        send(){
            axios.post('http://39.101.192.76:8099/api/uploadImage',this.formData).then((result) => {
              console.log (result)     
            }).catch((err) => {
                
            });
        },
        getFile(event){
         this.formData.append("file", event.target.files[0]);
             
        }
    }
}
</script>

<style>

</style>

