<template>
    <div>
        <v-form v-model="valid">
            <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                :rules="nameRules"
                v-model="userInfo.username"
                autocomplete="on"
            ></v-text-field>
            <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                v-model="userInfo.password"
                autocomplete="off"
            ></v-text-field>
        </v-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
          valid:false,
          nameRules:[
              v => !!v || '用户名不能为空',
              v => v.length >= 2 || '用户名长度必须>=2',
          ],
          passwordRules:[
              v=> !!v || '密码不能为空',
              v=> v.length >= 5  ||'密码长度必须>=5'
          ]

    }},
    props:['userInfo','formType']
}
</script>

<style>

</style>
