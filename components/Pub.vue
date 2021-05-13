<template>
 <div class="wrapper bird-view">
        <!-- NAVBAR END -->
        <div class="content-main">
          <div class="bird-view-box">
            <div class="info-bird">
              <h5 class="mt-0 title">{{pub.title}}</h5>
              <div class="mt-4" >
                <div v-html="pub.introtext"></div>
                <div v-html="pub.fulltext"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- CONTENT MAIN END -->
        <div class="menu-bottom">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                 <router-link :to="{ name:'Home' }" class="nav-link active" >
                    <span class="icon-bird_home"></span>
                    <span class="title-bottom">Aves y Lugares</span>
                 </router-link>
              </li>
            </ul>
        </div>
    </div> <!-- WRAPPER END -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
import config from 'config'
export default {
  name: 'Pub',
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
    ...mapActions('pub', ['getById']),
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
    ...mapState('pub', ['pub'])
  }
}
</script>
<style scoped>
.bird-view-box {
  margin-top:0 !important;
}
.bird-view .content-main {
  padding-top:0;
}
</style>
