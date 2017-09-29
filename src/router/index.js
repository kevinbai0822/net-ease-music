import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import 'vue-material-design-icons/styles.css'

Vue.use(Router)


export default new Router({
	routes: [
		{
			path: '/index',
			name: 'index',
			component: index
		},
	]
})
