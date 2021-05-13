<template>
<div class="wrapper">
    <nav class="navbar fixed-top navbar-light bg-light">
        <a class="navbar-brand sr-only">
            Enjoy Birding
        </a>
        <button v-on:click="toggleMenu" class="navbar-toggler" type="button"  aria-label="Toggle navigation">
            <img src="../img/icon-app.png" width="30" height="30" class="d-inline-block align-top" alt="Mc Mullan" loading="lazy">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div v-if="showmenu" class="navbar-collapse" id="navbarSupportedContent">
            <div class="user-box">
                <h4>Bienvenido</h4>
                <h5>{{user.name}}</h5>
            </div>
            <div class="email-box">
                <span>Usuario:</span>
                <span>{{user.email}}</span>
            </div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/login"><span>Cerrar sesión</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name:'Pub', params: { id: 4 } }" >
              Sobre la aplicación
            </router-link>
          </li>
          <li class="divider"><span class="sr-only">divider</span></li>
          <li class="title-group">Configurar idioma</li>
          <li class="nav-item">
            <a class="nav-link language" href="#">
                <img src="../img/flag-spanish.png">
                Espa&ntilde;ol
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link language" href="#">
                <img src="../img/flag-english.png">
                Ingl&eacute;s
            </a>
          </li>
        </ul>
        </div>
    </nav>
    <!-- NAVBAR END -->

    <div class="content-main search-content">
        <h3 class="title">Buscador de aves</h3>
        <div class="search-form">
          <input type="text" v-model="form.search" v-on:input="getResults" class="test" ref="search" placeholder="Buscar...">
          <span class="icon-search"></span>
        </div>
        <div class="tab-content" id="myTabContent">
          <!-- TAB CONTENT 1 -->
          <div class="tab-pane birds-box show active" id="birds" role="tabpanel" aria-labelledby="birds-tab">
            <div class="content-scroll">
                <ul class="list-unstyled birds-list">
                  <li class="media"  v-for="item in results" :key="item.id">
                    <div class="media-body">
                        <router-link :to="{ name:'Ave', params: { id: item.id } }">
                          <h5 class="mt-0 text-uppercase">{{item.nombre_comun}}</h5>
                          <h6 class="mt-0 mb-1 text-italic">({{item.title}})</h6>
                          <p v-html="item.description.substring(0,60) + '...'"></p>
                        </router-link>
                    </div>
                    <div class="media-img">
                       <router-link :to="{ name:'Ave', params: { id: item.id } }">
                            <img src="../gallery/bird-list-01.jpg" class="mr-3" alt="McMullan Birding">
                       </router-link>
                    </div>
                  </li>
                </ul>
            </div>

          </div>
          <!-- TAB CONTENT 2 -->
        </div>
    </div>
    <!-- CONTENT MAIN END -->

    <div class="menu-bottom">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="news.htm">
                <span class="icon-news"></span>
                <span class="title-bottom">Novedades</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name:'Home' }" class="nav-link active" >
                <span class="icon-bird_home"></span>
                <span class="title-bottom">Aves y Lugares</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name:'Pub', params: { id: 5 } }" >
              <span class="icon-star"></span>
              <span class="title-bottom">Premium</span>
            </router-link>
          </li>
        </ul>
    </div>
  </div> <!-- WRAPPER END -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Buscar',
  data () {
    return {
      showmenu: false,
      form: {search: null}
    }
  },
  methods: {
    toggleMenu: function (ev) {
      this.showmenu = !this.showmenu
    },
    ...mapActions('ave', ['search']),
    focusInput () {
      this.$refs.search.focus()
    },
    getResults: function (ev) {
      if (this.form.search.length < 4) return false
      this.search(this.form.search)
    }
  },
  computed: {
    ...mapState('account', ['user']),
    ...mapState('ave', ['results'])
  },
  created () {
    // this.getAll()

  },
  filters: {
    cut: function (value) {
      if (!value) return ''
      return value.slice(2)
    }
  },
  mounted () {
    this.focusInput()
  }
}
</script>
