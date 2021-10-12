System.components["mobile-logo"] = {
	template: `<img class="logo small mobile" id="mobile-logo" src="assets/socs-logo.png"/>`
}


System.components["mobile-tabs"] = {
	template: `<div id="mobile-tab-displays">
		<mobile-tab-icon-top></mobile-tab-icon-top>
		<mobile-tab-backdrop></mobile-tab-backdrop>
		<mobile-tab-selection></mobile-tab-selection>
	</div>`
}

System.components["mobile-tab-icon-top"] = {
	data() { return {
		tabData
	}},
	template: `<div id="mobile-tab-icon" :class="{opened: tabData.mobileDisplayOpen}"
	@click="tabData.mobileDisplayOpen = !tabData.mobileDisplayOpen">
		<img src="assets/tabs-mobile.png"/>
	</div>`
}
System.components["mobile-tab-backdrop"] = {
	data() { return {
		tabData
	}},
	template: `<div id="mobile-tab-backdrop" :class="{opened: tabData.mobileDisplayOpen}"
	@click="tabData.mobileDisplayOpen = !tabData.mobileDisplayOpen">
	</div>`
}
System.components["mobile-tab-selection"] = {
	data() { return {
		tabData
	}},
	template: `<div id="mobile-tab-selection" :class="{opened: tabData.mobileDisplayOpen}">
		<mobile-tab-button v-for="btn in tabData.tabButtons" :data="btn"></mobile-tab-button>
	</div>`
}

System.components["mobile-tab-button"] = {
	props: ["data"],
	data() { return {
		tabData
	}},
	methods: {
		toggleTab() {
			if (typeof this.data.choices == 'function') {
				this.data.choices();
				tabData.mobileDisplayOpen = false;
			}
		}
	},
	template: `<div class="mobile-tab-button-container">
		<div :class="{
			'mobile-tab-button-main': true,
			clickable: typeof this.data.choices == 'function',
			nounderline: true
		}"
		@click="toggleTab()">
			&nbsp;{{data.buttonText}}
			<arrow open="troll" class="alignright" v-if="!data.svg"></arrow>
			<svg-custom class="alignright" :svgData="data.svg"></svg-custom>
		</div>
		<div class="mobile-tab-button-container" v-if="typeof data.choices == 'object'">
			<div v-for="t in data.choices || []" @click="t.onClick(); tabData.mobileDisplayOpen = false;" class="mobile-tab-button-sub">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{t.text}}
			</div>
		</div>
	</div>`
}
