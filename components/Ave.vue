<template>
 <div class="wrapper bird-view">
        <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand sr-only">
                Mc Mullan Birding
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
                <a class="nav-link" href="about-mcmullan.html">Sobre McMullan Birding</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-app.html">Sobre la aplicación</a>
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

          <router-link to="/aves" class="box-icon top">
            <span class="icon-arrow_back"></span>
            <span class="title">Volver al listado</span>
          </router-link>
          <div class="bird-view-box">
              <div class="media-img">
                <img src="../gallery/bird-list-03.jpg" class="mr-3" alt="McMullan Birding">
              </div>

              <ul class="nav nav-tabs justify-content-center menu-top" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="tab-item-01" data-toggle="tab" href="#tab-01" role="tab" aria-controls="place" aria-selected="true">
                      <span class="icon-document"></span>
                      <span class="title-bottom">Descripción</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="tab-item-02" data-toggle="tab" href="#tab-02" role="tab" aria-controls="birds" aria-selected="false">
                      <span class="icon-location"></span>
                      <span class="title-bottom">Distribución</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="tab-item-03" data-toggle="tab" href="#tab-02" role="tab" aria-controls="birds" aria-selected="false">
                      <span class="icon-camera"></span>
                      <span class="title-bottom">Galería</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="tab-item-04" data-toggle="tab" href="#tab-02" role="tab" aria-controls="birds" aria-selected="false">
                      <span class="icon-music"></span>
                      <span class="title-bottom">Vocalizaciones</span>
                  </a>
                </li>
              </ul>
              <div class="tab-content tab-content-inside" id="myTabContent">
                <div class="tab-pane fade show active" id="tab-01" role="tabpanel" aria-labelledby="place-tab">
                  <div class="info-bird">
                    <h5 class="mt-0 title">{{id}} TUCÁN ANDINO PIQUILAMINADO</h5>
                    <div class="info-group">
                      <h6>Especie:</h6>
                      <p class="italic">Andigena laminirostris</p>
                    </div>
                    <div class="info-group">
                      <h6>Familia:</h6>
                      <p>Ramphastidae</p>
                    </div>
                    <div class="info-group">
                      <h6>Orden:</h6>
                      <p>Picifiromes</p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade show" id="tab-02" role="tabpanel" aria-labelledby="place-tab">
                  Content 2
                </div>
                <div class="tab-pane fade show" id="tab-02" role="tabpanel" aria-labelledby="place-tab">
                  Content 3
                </div>
                <div class="tab-pane fade show" id="tab-02" role="tabpanel" aria-labelledby="place-tab">
                  Content 4
                </div>
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
                <a class="nav-link active" href="places.html">
                    <span class="icon-bird_home"></span>
                    <span class="title-bottom">Aves y Lugares</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="premium.html">
                    <span class="icon-star"></span>
                    <span class="title-bottom">Premium</span>
                </a>
              </li>
            </ul>
        </div>
    </div> <!-- WRAPPER END -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Ave',
  data () {
    return {
      id: '',
      showmenu: false
    }
  },
  created: function () {
    this.id = this.$route.params.id
  },
  methods: {
    toggleMenu: function (ev) {
      this.showmenu = !this.showmenu
    }
  },
  computed: {
    ...mapState('account', ['user'])
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
