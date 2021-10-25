<template>
  <div class="max-w-md mx-auto pt-6">
  <div>
      <h1 class="mb-3">登録</h1>
      <div>
          <form v-if="step === steps.register" @submit="prevent">
              <input v-model="registerForm.email" type="email" placeholder="Email" class="form-control" />
              <input v-model="registerForm.password" type="password" placeholder="Password" class="form-control" />
              <v-btn type="submit" class="button">登録</v-btn>
          </form>
          <form v-else  @submit.prevent="confirm">
              <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control" />
              <input v-model="confirmForm.code" type="code" placeholder="Code" class="form-control" />
              <v-btn type="submit" class="button">登録</v-btn>
          </form>
          <nuxt-link to="/login">アカウントを持っていますか？</nuxt-link>
      </div>
      <div>
          
      </div>
  </div>
  </div>
 

</template>

<script>
import { Auth } from 'aws-amplify';
const steps={
    register:'REGISTER',
    confirm: 'CONFIRM'
}
export default {
    data:() =>({
        steps:{...steps },
        step: steps.register,
        registerForm:{
            email: '',
            password: '',
        },
        confirmForm:{
            email: '',
            code: '',
        }
    }),

    methods:{
        async register(){
            try{
                await this.$store.dispatch('auth/register',this.registerForm);
                this.confirmForm.email =this.register.email;
                this.step =this.steps.confirm;
                } catch (error){
                    console.log({ error })
                }
        },

        async confirm(){
            try{
                await this.$store.dispatch('auth/confirmRegisteration', this.confirmForm)
                await this.$store.dispatch('auth/login', this.registerForm)
                this.$router.push('/')
             }catch(error){
             console.log({error})
             }
        }
    }
}
</script>

<style>

</style>