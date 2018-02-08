<template>
    <div>
        <h1>Login</h1>
        <div class="form-group">
            <label for="email">Email adress</label>
            <input type="text" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="user.password">
        </div>
        <h3>{{message}}</h3>
        <button class="btn btn-primary" @click="signIn">Login</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "",
                user:{
                    email: "",
                    password: ""
                }  
            }
        },
        methods: {
            signIn() {
             this.$store.dispatch('signin',this.user )
            }
        }
    }
</script>