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
                <span>Email:</span>
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
            <router-link to="/home" class="nav-link active" id="place-tab">
                <span class="icon-places"></span>
                <span class="title-bottom">Lugares</span>
            </router-link>
          </li>
          <li class="nav-item" role="presentation">
            <router-link to="/aves" class="nav-link" id="birds-tab">
                <span class="icon-birds"></span>
                <span class="title-bottom">Aves</span>
            </router-link>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="place" role="tabpanel" aria-labelledby="place-tab">
            <button type="button" class="btn btn-secondary pin-map position" data-toggle="modal" data-target="#modal-map-01">
              <img src="../img/pin-map.png" width="48">
            </button>
            <l-map :zoom="zoom" :center="center" :options="options" ref="myMap" >
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker
                  v-for="item in markers"
                  :key="item.id"
                  :lat-lng="getCoordinates(item)"
                  :icon="getIcon(item)"
                  @click="onclick(item)"
                  >
                  </l-marker>
            </l-map>

            <!-- Modal -->
            <div class="modal fade" id="modal-map-01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Parque Simón Bolívar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="image-card">
                        <img src="../gallery/parque_simon_bolivar.jpg">
                    </div>
                    <p>El Parque Metropolitano Simón Bolívar es el parque urbano más grande e importante de la ciudad de Bogotá, se encuentra ubicado en el centro geográfico de Bogotá, en la localidad de Barrios Unidos.</p>
                  <div class="text-center">
                    <a href="place-view.html" class="btn btn-outline-primary">
                        <span class="icon-search"></span>
                        Ver ficha
                    </a>
                  </div>
                  </div>
                </div>
              </div>
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
import L from 'leaflet'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      markers: [],
      showmenu: false,
      options: {scrollWheelZoom: false},
      zoom: 6,
      center: L.latLng(3.427, -76.510),
      url: 'https://api.mapbox.com/styles/v1/dyg321/cjyf663yo2kwr1cpnyc8ozqby/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHlnMzIxIiwiYSI6ImNqMGp1amVleDAya3AzNm1ldnNscno0bmwifQ.o_CfXMBY0yeSBzUD0uGpSg',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
