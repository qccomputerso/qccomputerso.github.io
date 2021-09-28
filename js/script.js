let app;

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
			open: false
		}},
		template: `<span>
			<span @click="open = !open" class="tabbutton-whole">
				<span class="tab-button">{{data.buttonText}}</span>
				<arrow :open="open"></arrow>
			</span>
		</span>`
	})
	app = new Vue({
		el: '#app',
		data: {
		}
	})
}