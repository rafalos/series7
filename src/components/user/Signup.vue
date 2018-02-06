<template>
    <div>
        <h1>Register</h1>
        <div class="form-group">
            <label for="email">Email adress</label>
            <input type="text" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="user.password">
        </div>
        <button class="btn btn-primary" @click="signUp">Register</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user:{
                    email: "",
                    password: ""
                }  
            }
        },
        methods: {
            signUp() {
                this.$http.post("register", this.user)
                .then(function(res){
                    console.log(res)
                }) 
            }
        }
    }
</script>