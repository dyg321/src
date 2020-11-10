<template>
  <div id="app">
     <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from) {
      // clear alert on location change
      this.clearAlert()
    }
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?rhtveh');
  src:  url('fonts/icomoon.eot?rhtveh#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?rhtveh') format('truetype'),
    url('fonts/icomoon.woff?rhtveh') format('woff'),
    url('fonts/icomoon.svg?rhtveh#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'poppinsbold';
  src: url('fonts/poppins-bold-webfont.woff2') format('woff2'),
        url('fonts/poppins-bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'poppinslight';
  src: url('fonts/poppins-light-webfont.woff2') format('woff2'),
        url('fonts/poppins-light-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'poppinsregular';
  src: url('fonts/poppins-regular-webfont.woff2') format('woff2'),
        url('fonts/poppins-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'poppinssemibold';
  src: url('fonts/poppins-semibold-webfont.woff2') format('woff2'),
        url('fonts/poppins-semibold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
