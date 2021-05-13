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
                <span>Email:</span>
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
        <div class="my-lg-0 button-search">
          <router-link :to="{ name:'Buscar' }">
            <span class="icon-search"></span>
            <span class="text-search">Buscar</span>
          </router-link>
        </div>
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
            <l-map @update:zoom="onZoomed" @ready="onReady" :center="center" :zoom="zoom" :options="options" ref="myMap" >
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker
                  v-for="item in places"
                  :key="item.id"
                  :lat-lng="getCoordinates(item)"
                  @click="onclick(item)"
                  >
                  <l-icon
                    :icon-size="isize"
                    :icon-url="ifile"
                  ></l-icon>
                  </l-marker>
            </l-map>

            <!-- Modal -->
            <div v-if="modal" class="modal d-block" id="modal-map-01" tabindex="-1" aria-labelledby="exampleModalLabel">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{marker.title}}</h5>
                    <button type="button" class="close" @click="closeModal()">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="image-card">
                        <img v-bind:src="marker.filename | setPath">
                    </div>
                    <div v-html="marker.introtext"></div>
                  <div class="text-center">
                    <router-link :to="{ name:'Lugar', params: { id: marker.id } }" class="btn btn-outline-primary">
                        <span class="icon-search"></span>
                        Ver ficha
                    </router-link>
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
import L from 'leaflet'
import { mapState, mapActions } from 'vuex'
import config from 'config'

export default {
  name: 'Home',
  data () {
    return {
      apiurl: config.apiUrl,
      gettingLocation: false,
      center: L.latLng('3.3968', '-76.5652'),
      markers: [],
      marker: {},
      modal: false,
      showmenu: false,
      options: {scrollWheelZoom: false},
      zoom: 12,
      isize: [32, 32],
      ifile: require('../img/pin-map.svg'),
      errorStr: null,
      mapLoaded: false,
      url: 'https://api.mapbox.com/styles/v1/dyg321/cjyf663yo2kwr1cpnyc8ozqby/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHlnMzIxIiwiYSI6ImNqMGp1amVleDAya3AzNm1ldnNscno0bmwifQ.o_CfXMBY0yeSBzUD0uGpSg',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    toggleMenu: function (ev) {
      this.showmenu = !this.showmenu
    },
    ...mapActions('place', ['getAll']),
    ...mapActions({
      map: 'alert/map'
    }),
    getCoordinates (i) {
      return L.latLng(i.coord_principal.split(','))
    },
    getIcon (i, size) {
      return L.icon({
        iconUrl: require('../img/meeting.svg'),
        iconSize: size
      })
    },
    onclick (i) {
      this.marker = i
      this.modal = true
    },
    onZoomed (zoom) {
      if (zoom < 8) {
        this.isize = [8, 8]
      } else if (zoom < 11) {
        this.isize = [16, 16]
      } else if (zoom < 16) {
        this.isize = [32, 32]
      }
    },
    onReady (map) {
      if (!this.alert.mapLoaded) {
        this.gettingLocation = true
        navigator.geolocation.getCurrentPosition(pos => {
          this.center = L.latLng(pos.coords.latitude, pos.coords.longitude)
          map.setView(this.center, 12)
          this.getAll()
          this.map(true)
        }, err => {
          this.gettingLocation = false
          this.errorStr = err.message
        })
      }
    },
    closeModal () {
      this.modal = false
      this.marker = {}
    },
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
    ...mapState('place', ['places']),
    ...mapState({
      alert: state => state.alert
    })
  },
  created () {
    if (!('geolocation' in navigator)) {
      this.errorStr = 'Geolocation is not available.'
    }
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
    }
  }
}
</script>
