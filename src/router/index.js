import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import SksStandart from "../components/SksStandart"
import degerlendir from "../components/degerlendir"
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:
    [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/SKS/:sksId',
      name: 'SksStandart',
      component: SksStandart
    },
      {
        path: '/Degerlendir',
        name: 'degerlendir',
        component: degerlendir
      }

    ]
})
