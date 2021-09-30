let app, tabData = {
	opened: "",
	tabButtons: [
		{
			buttonText: 'Generic tab 1',
			choices: [{
				text: 'Trolling',
				onClick: function() {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();},
			}, {
				text: 'More Trolling',
				onClick: function() {alert('...')},
			}]
		},
		{
			buttonText: 'Generic tab 2',
			choices: [{
				text: 'Loss',
				onClick: function() {window.open("https://en.wikipedia.org/wiki/Loss_(comic)", '_blank').focus();},
			}, {
				text: 'Loss',
				onClick: function() {window.open("https://en.wikipedia.org/wiki/Loss_(comic)", '_blank').focus();},
			}, {
				text: 'Loss 2',
				onClick: function() {alert(':.|:;')},
			}]
		},
		{
			buttonText: 'Generic tab 3',
			choices: [{
				text: 'Test',
				onClick: function() {alert('null')},
			}, {
				text: '.',
				onClick: function() {alert('.')},
			}]
		},
		{
			buttonText: 'Generic tab 99',
			choices: [{
				text: 'Home',
				onClick: function() {alert('There\'s nothing here')},
			}, {
				text: ',',
				onClick: function() {alert(',')},
			}]
		},
		{
			buttonText: 'Generic tab NaN',
			choices: [{
				text: '...',
				onClick: function() {alert('[object Object]')},
			}, {
				text: ',,,',
				onClick: function() {alert('undefined')},
			}]
		}
	]
};

function load() {
	Vue.component('content-div', {
		props: ["game"],
		data() { return {
			show: false
		}},
		template: `<div class="gamedata-div">
			<div :class="{'game-prompt': true, active: show}" @click="show = !show;">
				{{game.title}} &nbsp;<img src="images/arrow.png" width="25" class="arrow-img" :style="{
					transform: 'rotate(' + (show ? 0 : 180) + 'deg) translateY(' + (show ? '-' : '') + '50%)',
				}"/>
			</div>
			<div class="gamedata-content" v-if="show">
				<br>
				<span class="txtlarge">Links:</span>
				<span v-for="(link, name) in game.links" class="txtlarge"><br>
					{{name}}: <a :href="link" target="newtab">{{link}}</a>
				</span>
				<br><br>
				<span v-html="game.desc" style="color: var(--c2)"></span>
			</div>
		</div>`
	})
	Vue.component('arrow', {
		props: ["open"],
		template: `<svg width="20" height="20" class="arrow" :style="{
			transform: open ? 'rotate(180deg)' : ''
		}">
			<line x1="1" y1="15.5" x2="10.5" y2="6" style="stroke: var(--c2); stroke-width: 2;"/>
			<line x1="9.5" y1="6" x2="19" y2="15.5" style="stroke: var(--c2); stroke-width: 2;"/>
		</svg>`
	})
	Vue.component('tab-button', {
		props: ["data"],
		data() { return {
			tabData
		}},
		methods: {
			toggleTab() {
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
					visibility: this.open ? "visible" : "hidden",
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
			<div class="tab-dropdown" :style="style">
				<div v-for="t in data.choices || []" @click="t.onClick()">
					{{t.text}}
				</div>
			</div>
		</div>`
	})
	app = new Vue({
		el: '#app',
		data: {
			tabData
		}
	})
}