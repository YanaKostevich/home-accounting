<template>
  <form class="card auth-card" @submit.prevent="submitForm">
    <div class="card-content">
      <span class="card-title">Домашня бухгалтерія</span>
      <div class="input-field">
        <input type="text" placeholder="Email" v-model.trim="email"/>
        <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" v-model="password"/>
        <span v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </span>
      </div>
    </div>
    <div class="card-action">
      <button class="btn waves-effect waves-light auth-submit">
        Увійти
        <i class="material-icons right">send</i>
      </button>
      <p class="center">
        Немає акаунта?
        <router-link to="/register">Зареєструватись</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useValidate from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
// import messages from '@/utils/messages'

export default {
  data () {
    return {
      v$: useValidate(),
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        // eslint-disable-next-line no-unused-vars
        const formData = {
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
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
  // mounted () {
  //   if (messages[this.$route.query.message]) {
  //     this.$message(messages[this.$route.query.message])
  //   }
  //   this.$message('Text')
  // }
}

</script>

<style lang="scss" scoped>
.card {
  .card-content {
    .card-title {
      margin-bottom: 2rem;
    }
  }
}
.input-field {
  span {
    color: red;
  }
}

button {
  margin-top: 10px;
}
</style>
