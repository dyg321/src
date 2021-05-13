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
            <span class="title">Volver al listado</span>
          </router-link>
          <div class="bird-view-box" v-if="place.tipo">
            <h5 class="mt-0 title">{{place.title}}</h5>
              <div class="mt-4">
                <b-tabs content-class="mt-3" class="nav-tabs menu-top">
                  <b-tab active class="">
                    <template #title>
                      <span class="icon-document"></span>
                      <span class="title-bottom">Descripción</span>
                    </template>
                    <div class="info-bird">
                      <h6 class="text-uppercase">{{place.tipo}}</h6>
                      <div class="mt-4" v-html="place.description"></div>
                    </div>
                  </b-tab>
                  <b-tab class="">
                    <template #title>
                      <span class="icon-camera"></span>
                      <span class="title-bottom">Galería</span>
                    </template>
                    <div class="info-bird">
                      <div class="container">
                        <div id="gallery" class="row mt-4">
                          <div class="col-6 mb-2"  v-for="(ph, i) in place.fotos" :key="ph.id">
                            <img @click="index = i" v-bind:src="apiurl + '/images/phocagallery/' + resize(ph.filename,'l')" class="w-100">
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab class="">
                    <template #title>
                      <span class="icon-person"></span>
                      <span class="title-bottom">Contacto</span>
                    </template>
                    <div class="info-bird">
                      <div class="info-group" v-if="place.contacto">
                        <h6>Nombre:</h6>
                        <p>{{place.contacto}}</p>
                      </div>
                      <div class="info-group"  v-if="place.celular">
                        <h6>Celular:</h6>
                        <p>{{place.celular}}</p>
                      </div>
                      <div class="info-group"  v-if="place.fijo">
                        <h6>Teléfono fijo:</h6>
                        <p>{{place.fijo}}</p>
                      </div>
                      <div class="info-group"  v-if="place.email">
                        <h6>Email:</h6>
                        <p>{{place.email}}</p>
                      </div>
                      <div class="info-group"  v-if="place.website">
                        <h6>Sitio Web:</h6>
                        <p>{{place.website}}</p>
                      </div>
                      <div class="info-group"  v-if="place.ciudad">
                        <h6>Ciudad:</h6>
                        <p>{{place.mpio}} / {{place.depto}} / {{place.pais}}</p>
                      </div>
                    </div>
                  </b-tab>
                   <b-tab class="" v-if="place.especies">
                    <template #title>
                      <span class="icon-birds"></span>
                      <span class="title-bottom">Especies vistas</span>
                    </template>
                    <div class="info-bird">
                       <ul class="list-unstyled birds-list">
                        <li class="media"  v-for="item in place.especies" :key="item.id">
                          <div class="media-body">
                              <router-link :to="{ name:'Ave', params: { id: item.id } }">
                                <h5 class="mt-0 text-uppercase">{{item.nombre_comun}}</h5>
                                <h6 class="mt-0 mb-1 text-italic">({{item.title}})</h6>
                                <p v-html="item.description.substring(0, 60) + '...'"></p>
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
        <vue-gallery-slideshow :images="place.fotos" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div> <!-- WRAPPER END -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VueGallerySlideshow from 'vue-gallery-slideshow'
import config from 'config'
export default {
  name: 'Lugar',
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      id: '',
      index: null,
      showmenu: false,
      apiurl: config.apiUrl
    }
  },
  created: function () {
    let id = this.$route.params.id
    this.getById(id)
  },
  methods: {
    toggleMenu: function (ev) {
      this.showmenu = !this.showmenu
    },
    ...mapActions('place', ['getById']),
    resize (filename, size) {
      let patharray = filename.split('/')
      let paths = patharray.pop()
      patharray.push('thumbs')
      let file = 'phoca_thumb_' + size + '_' + paths
      patharray.push(file)
      return patharray.join('/')
    }
  },
  computed: {
    ...mapState('account', ['user']),
    ...mapState('place', ['place'])
  },
  filters: {
    setPath: function (filename) {
      if (!filename) return ''
      let patharray = filename.split('/')
      let paths = patharray.pop()
      patharray.push('thumbs')
      let file = 'phoca_thumb_l_' + paths
      patharray.push(file)
      return config.apiUrl + '/images/phocagallery/' + patharray.join('/')
    },
    cut: function (value) {
      if (!value) return ''
      return value.substring(0, 50)
    }
  }
}
</script>
<style scoped>
.nav-tabs {
  flex-wrap: nowrap;
  overflow: auto;
  overflow-y:hidden;
}
</style>
