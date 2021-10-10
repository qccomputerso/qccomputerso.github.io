let app;

// Arrow down thing for tab buttons
System.components.arrow = {
	props: ["open"],
	template: `<svg width="20" height="20" class="arrow" :style="{
		transform: open ? 'rotate(180deg)' : ''
	}">
		<line x1="1" y1="15.5" x2="10.5" y2="6" style="stroke: var(--c2); stroke-width: 2;"/>
		<line x1="9.5" y1="6" x2="19" y2="15.5" style="stroke: var(--c2); stroke-width: 2;"/>
	</svg>`
}

// Tab buttons on top
System.components["tab-button"] = {
	props: ["data"],
	data() { return {
		tabData
	}},
	methods: {
		toggleTab() {
			if (typeof this.data.choices == 'function') {
				this.data.choices();
				return;
			}
			if (this.open) 
				tabData.opened = "";
			else 
				tabData.opened = this.data.buttonText;
		}
	},
	computed: {
		open() {
			return tabData.opened == this.data.buttonText
		},
		style() {
			return {
				visibility: this.open ? "inherit" : "hidden",
				opacity: this.open ? 1 : 0,
				"z-index": this.open ? 1 : 0
			}
		}
	},
	template: `<div class="tab-choice">
		<span @click="toggleTab()" class="tabbutton-whole">
			<span class="tab-button">{{data.buttonText}}</span>
			<arrow :open="open"></arrow>
		</span>
		<div class="tab-dropdown" :style="style" v-if="typeof data.choices == 'object'">
			<div v-for="t in data.choices || []" @click="t.onClick(); tabData.opened = '';">
				{{t.text}}
			</div>
		</div>
	</div>`
}

System.components["overlay-head"] = {
	data() { return {
		tabData
	}},
	template: `<div class="header">
		<div id="top-banner">
			<img class="logo small" src="assets/socs-logo.png"/>
		</div>
		<div id="tab-button-container">
			<div>
				<tab-button v-for="btn in tabData.tabButtons" :data="btn"></tab-button>
			</div>
		</div>
	</div>`
}
