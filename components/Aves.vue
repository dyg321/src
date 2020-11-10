<template>
<div class="wrapper">
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
        <ul class="nav nav-tabs justify-content-center menu-top" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <router-link to="/home" class="nav-link" id="place-tab">
                <span class="icon-places"></span>
                <span class="title-bottom">Lugares</span>
            </router-link>
          </li>
          <li class="nav-item" role="presentation">
            <router-link to="/aves" class="nav-link active" id="birds-tab">
                <span class="icon-birds"></span>
                <span class="title-bottom">Aves</span>
            </router-link>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <!-- TAB CONTENT 1 -->
          <div class="tab-pane birds-box show active" id="birds" role="tabpanel" aria-labelledby="birds-tab">
            <div class="content-scroll">
                <ul class="list-unstyled birds-list">
                  <li class="media">
                    <div class="media-body">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                          <h5 class="mt-0">TUCÁN ANDINO PIQUILAMINADO</h5>
                          <h6 class="mt-0 mb-1">(Andigena laminirostris)</h6>
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at...</p>
                        </router-link>
                    </div>
                    <div class="media-img">
                       <router-link :to="{ name:'Ave', params: { id: 4 } }">
                            <img src="../gallery/bird-list-01.jpg" class="mr-3" alt="McMullan Birding">
                       </router-link>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-body">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                          <h5 class="mt-0">TREPATRONCOS CABECIRRAYADO</h5>
                          <h6 class="mt-0 mb-1">(Lepidocolaptes souleyetii)</h6>
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis...</p>
                      </router-link>
                    </div>
                    <div class="media-img">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                            <img src="../gallery/bird-list-02.jpg" class="mr-3" alt="McMullan Birding">
                        </router-link>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-body">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                          <h5 class="mt-0">TANGARÁ DE TATAMA</h5>
                          <h6 class="mt-0 mb-1">(Bangsia aureocincta)</h6>
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio...</p>
                      </router-link>
                    </div>
                    <div class="media-img">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                            <img src="../gallery/bird-list-03.jpg" class="mr-3" alt="McMullan Birding">
                        </router-link>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-body">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                          <h5 class="mt-0">QUETZAL CRESTADO</h5>
                          <h6 class="mt-0 mb-1">(Pharomachrus antisianus)</h6>
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis...</p>
                      </router-link>
                    </div>
                    <div class="media-img">
                        <router-link :to="{ name:'Ave', params: { id: 4 } }">
                            <img src="../gallery/bird-list-04.jpg" class="mr-3" alt="McMullan Birding">
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
  name: 'Aves',
  data () {
    return {
      showmenu: false
    }
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
