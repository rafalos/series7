<template>
    <div>
        <h1>Register</h1>
        <div class="form-group">
            <label for="email">Email adress</label>
            <input type="text" class="form-control" v-model="user.email">
            <h3>{{message}}</h3>
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
                message: "",
                user:{
                    email: "",
                    password: "",
                }  
            }
        },
        methods: {
            signUp() {
                this.$store.dispatch('signup',this.user)
            }
        }
    }
</script>