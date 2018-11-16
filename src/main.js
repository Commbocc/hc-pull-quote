import Vue from 'vue'
import App from './App.vue'

Array.prototype.forEach.call(document.getElementsByClassName('hc-pull-quote'), (el, i) => {
  new Vue({
    el,
    components: { PullQuote: App }
  })
})
