System.tabs.home = {
	methods: {
		tabTo
	},
	template: `<div class="tab-content">
		<span class="heading">Welcome to our home page!</span><br>
		<span class="heading2">About</span>
		<hr>
		Our goal as the Society of Computer Studies is to provide insight about programming and Computer Science
		to our schoolmates, and to help them gain a better understanding of the topics, as well as an understanding
		of the impact of rapid development of IT on our society.<br>
		We conduct <u>programming courses</u>, as well as training for the
		<a class="invert" href="https://hkoi.org/en/" target="newtab">HKOI</a> (Hong Kong Olympiad in Informatics)
		to achieve our aims.
		<br><br>
		<div class="button" @click="tabTo('events')">Upcoming Events >></div>
		<br><br>
		<span class="heading2">Officials List</span>
		<hr>
		Chairman:<br>

		<info name="Chan Chi Him" info="5C(01)"></info><br>
		Vice Chairman:<br>

		<info name="Yip Cheuk Lam" info="5C(34)"></info>
		<info name="Chen Kyle" info="4A(06)"></info><br>
		Committee:<br>

		<info name="Wu Zi Qi" info="3A(30)"></info>
		<info name="Fu Sze Ho" info="3C(10)"></info>
		<info name="Li Yue Wang" info="4B(19)"></info>
		<info name="Lam Ching Yiu" info="5A(10)"></info>
		<info name="Fung Yik Hei" info="4C(07)"></info>
		<br>
		<div class="button" @click="tabTo('contacts')">Contact Us >></div>
	</div>`
}
System.components.info = {
	props: ["name", "info"],
	template: `<div>
		<span class="list-leftmost">{{name}}</span>{{info}}
	</div>`
}