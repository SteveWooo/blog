import Vue from 'vue'
import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
new Vue({
    'el': '#main',
    data() {
        return { value: '' }
    }
})