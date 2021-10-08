System.tabs.contacts = {
	data() { return {
		copyTimeoutIds: {
			phone: -1,
			email: -1
		} 
	}},
	methods: {
		copy(text, id) {
			clearTimeout(this.copyTimeoutIds[id]);
			navigator.clipboard.writeText(text);
			this.copyTimeoutIds[id] = setTimeout(() => {this.copyTimeoutIds[id] = -1}, 1000);
		}
	},
	template: `<div class="tab-content">
		<span class="heading">Contacts</span><br>
		<span class="heading2">Private</span><hr>
		<u @click="copy('+852 5129 3147', 'phone')" class="clickable">
			<info name="Phone number:" info="+852 5129 3147"></info>
		</u>
		<span v-if="copyTimeoutIds.phone >= 0">(Copied)</span><br>

		<u @click="copy('qccomputerso@gmail.com', 'email')" class="clickable">
			<info name="Email:" info="qccomputerso@gmail.com"></info>
		</u>
		<span v-if="copyTimeoutIds.email >= 0">(Copied)</span><br>

		<a href="https://www.instagram.com/qc_socs/" target="newtab" class="invert">
			<info name="Instagram:" info="@qc_socs"></info>
		</a>
	</div>`
}