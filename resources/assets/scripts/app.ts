import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import '../styles/app.scss'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
	store,
	router,
	components: { App }
}).$mount('#app')
