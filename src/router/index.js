import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import show from '@/components/Show'
import 'vue-material-design-icons/styles.css'

Vue.use(Router)


export default new Router({
routes: [
	{
    	path: '/Index',
    	name: 'index',
    	component: index
	},
	{
		path: '/Show',
		name: 'show',
		component: show
	}
]
})
