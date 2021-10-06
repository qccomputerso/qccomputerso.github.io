System.tabs.home = {
	template: `<div class="tab-content">
		<img class="logo" src="assets/socs-logo.png"/>
		<span class="heading">Welcome to our home page!</span><br>
		<span class="heading2">About</span>
		<hr>
		Our goal as the Society of Computer Studies is to provide insight about programming and computer science
		to our schoolmates, and to help them gain a better understanding of the topics, as well as an understanding
		of the impact of rapid development of IT on our society.<br>
		We conduct <u>programming courses</u>, as well as training for the
		<a class="invert" href="https://hkoi.org/en/" target="newtab">HKOI</a> (Hong Kong Olympiad in Informatics)
		to achieve our aims.
		<br><br>
		<span class="heading2">Committee List</span>
		<hr>
		Chairman:<br>
		<member name="Chan Chi Him" info="5C(01)"></member><br>
		Vice Chairman:<br>
		<member name="Yip Cheuk Lam" info="5C(34)"></member>
		<member name="Chen Kyle" info="4A(06)"></member><br>
		Committee:<br>
		<member name="Wu Zi Qi" info="3A(30)"></member>
		<member name="Fu Sze Ho" info="3C(10)"></member>
		<member name="Li Yue Wang" info="4B(19)"></member>
		<member name="Lam Ching Yiu" info="5A(10))"></member>
		<member name="Fung Yik Hei" info="4C(07)"></member>
	</div>`
}
System.components.member = {
	props: ["name", "info"],
	template: `<div>
		<span class="list-leftmost">{{name}}</span>{{info}}
	</div>`
}