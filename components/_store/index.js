import Vue from 'vue'
import Vuex from 'vuex'

import { account } from './account.module'
import { alert } from './alert.module'
import { place } from './place.module'
import { pub } from './pub.module'
import { ave } from './ave.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    account,
    alert,
    place,
    pub,
    ave
  }
})
