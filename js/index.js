let System = {
	components: {},
	tabs: {}
}
function load() {
	for (let i in System.components) {
		Vue.component(i, System.components[i])
	}
	for (let i in System.tabs) {
		Vue.component(i + '-tab', System.tabs[i]);
	}
	tabData.tab = location.href.split("#")[1];
	app = new Vue({
		el: '#app',
		data: {
			tabData,
			System
		}
	})
}