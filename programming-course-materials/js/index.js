let System = {
	components: {}
}
function load() {
	for (let i in System.components) {
		Vue.component(i, System.components[i])
	}
	app = new Vue({
		el: '#app',
		data: {
			System
		}
	})
}