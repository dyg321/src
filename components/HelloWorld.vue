<template>
 <div class="container">
        <form class="form-signin login">
          <div class="text-right">
            <img class="login-bird" src="../assets/img/login-bird.png" alt="" width="80%">
          </div>

          <div class="form-label-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus="">
            <label for="inputEmail">Email</label>
          </div>

          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <label for="inputPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Recordar sesi&oacute;n
            </label>
            <a href="#" class="d-block">¿Has olvidado tu contrase&ntilde;a?</a>
          </div>
          <button class="btn btn-lg btn-primary" type="submit">Inicia sesi&oacute;n</button>
          <a href="signup.html" class="d-block">Crear cuenta</a>
        <div class="w-100 text-center">
            <img src="../assets/img/mc-icon-login.png" width="80px">
        </div>
          <ul class="link-group">
              <li>
                  <a href="#">Sobre McMullan Birding</a>
              </li>
              <li>
                  <a href="#">Sobre la aplicaci&oacute;n</a>
              </li>
          </ul>
        </form>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
