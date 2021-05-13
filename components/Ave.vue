<template>
 <div class="wrapper bird-view">
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
            <form class="form-inline my-lg-0 form-search">
              <input class="form-control" type="search" placeholder="Buscar" aria-label="Search">
              <button class="btn" type="submit">
                <span class="icon-search"></span>
              </button>
            </form>
        </nav>
        <!-- NAVBAR END -->
        <div class="content-main">

          <router-link to="/home" class="box-icon top">
            <span class="icon-arrow_back"></span>
            <span class="title">Volver al mapa</span>
          </router-link>
          <div class="bird-view-box" v-if="ave.id">
              <div class="media-img">
                <img @click="index = 0" v-bind:src="photos[0].url" class="mr-3" alt="McMullan Birding">
              </div>
              <div>
                <b-tabs content-class="mt-3" class="nav-tabs menu-top">
                  <b-tab active class="">
                    <template #title>
                      <span class="icon-document"></span>
                      <span class="title-bottom">General</span>
                    </template>
                    <div class="info-bird">
                      <h5 class="mt-0 title">{{ave.nombre_comun}}</h5>
                      <h6>{{ave.nombre_ingles}}</h6>
                      <h6 class="mt-0 mb-1 font-italic">({{ave.title}})</h6>
                      <div class="my-4" v-html="ave.description"></div>
                      <h5>Descripción física</h5>
                      <div class="my-4" v-html="ave.desc_fisica"></div>
                      <h5>Descripción hábitat</h5>
                      <div class="my-4" v-html="ave.desc_habitat"></div>
                    </div>
                  </b-tab>
                  <b-tab class="">
                    <template #title>
                      <span class="icon-camera"></span>
                      <span class="title-bottom">Galería Flickr</span>
                    </template>
                    <div class="info-bird">
                      <h5 class="mt-0 title">{{ave.nombre_comun}}</h5>
                      <div class="container">
                        <div id="gallery" class="row mt-4">
                          <div class="col-6 mb-2"  v-for="(ph, i) in photos" :key="ph.id">
                            <img @click="index = i" v-bind:src="ph.url" class="w-100">
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
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
        <vue-gallery-slideshow :images="photos" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div> <!-- WRAPPER END -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  name: 'Ave',
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      id: '',
      index: null,
      showmenu: false
    }
  },
  created: function () {
    let id = this.$route.params.id
    this.getById(id)
  },
  methods: {
    ...mapActions('ave', ['getById']),
    toggleMenu: function (ev) {
      this.showmenu = !this.showmenu
    }
  },
  computed: {
    ...mapState('account', ['user']),
    ...mapState('ave', ['ave', 'photos'])
  }
}
</script>
