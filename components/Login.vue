<template>
 <div id="login" class="container">
        <form class="form-signin login" @submit.prevent="handleSubmit">
          <div class="text-right">
            <img class="login-bird" src="../img/login-bird.png" alt="" width="80%">
          </div>

          <div class="form-label-group">
            <input v-model="username" type="text" id="inputEmail" class="form-control" placeholder="Email" autofocus="" :class="{ 'is-invalid': submitted && !username }">
            <label for="inputEmail">Email</label>
            <div v-show="submitted && !username" class="invalid-feedback">Email es obligatorio</div>
          </div>

          <div class="form-label-group">
            <input v-model="password"  type="password" id="inputPassword" :class="{ 'is-invalid': submitted && !password, 'form-control':true }" placeholder="Password" required="">
            <label for="inputPassword">Password</label>
            <div v-show="submitted && !password" class="invalid-feedback">La clave es obligatoria</div>
          </div>

          <div class="checkbox mb-3">
            <router-link to="/home" class="d-block">¿Has olvidado tu contrase&ntilde;a?</router-link>
          </div>
          <button  class="btn btn-lg btn-primary" :disabled="status.loggingIn">Inicia sesi&oacute;n</button >
          <router-link to="/home" class="d-block">Crear cuenta</router-link>
        <div class="w-100 text-center">
            <img src="../img/mc-icon-login.png" width="80px">
        </div>
          <ul class="link-group">
              <li>
                  <router-link to="/home" >Sobre McMullan Birding</router-link>
              </li>
              <li>
                  <router-link to="/home" >Sobre la aplicaci&oacute;n</router-link>
              </li>
          </ul>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  created () {
    // reset login status
    this.logout()
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
      this.submitted = true
      const { username, password } = this
      if (username && password) {
        this.login({ username, password })
      }
    }
  }
}
</script>
<style>
@import '../css/icons.css';
@import '../css/floating-labels.css';
@import '../css/theme-birds.css';

body {
   background-color: #DFE8B8;
}
</style>
