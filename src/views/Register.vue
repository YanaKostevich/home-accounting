<template>
  <form class="card auth-card" @submit.prevent="submitForm">
    <div class="card-content">
      <span class="card-title">Домашня бухгалтерія</span>
      <div class="input-field">
        <input type="text" placeholder="Name" v-model.trim="name"/>
        <span v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }} </span>
      </div>
      <div class="input-field">
        <input type="text" placeholder="Email" v-model.trim="email"/>
        <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" v-model="password"/>
        <span v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </span>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <button class="btn waves-effect waves-light auth-submit">
        Зареєструватись
        <i class="material-icons right">send</i>
      </button>

      <p class="center">
        Вже є аккаунт?
        <router-link to="/login">Увійти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useValidate from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
export default {
  data () {
    return {
      v$: useValidate(),
      name: '',
      email: '',
      password: '',
      agree: false
    }
  },
  methods: {
    submitForm () {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        // eslint-disable-next-line no-unused-vars
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        console.log(formData)
        // if ANY fail validation
        this.$router.push('/')
      } else {
        alert('Form failed validation')
      }
    }
  },
  validations () {
    return {
      name: {
        required
      },
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      agree: { checked: v => v }
    }
  }
}
</script>

<style lang="scss" >

</style>
