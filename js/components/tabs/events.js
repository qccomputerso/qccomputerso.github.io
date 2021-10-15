System.tabs.events = {
	methods: {
		tabTo
	},
	template: `<div class="tab-content">
		<span class="heading">Upcoming Events</span>
		<hr>
		<span class="heading2">15/10 (Fri)<br>
			<u class="clickable" @click="tabTo('events-oday')">Orientation Day</u>
		</span>
	</div>`
}
System.tabs["events-oday"] = {
	methods: {
		tabTo
	},
	template: `<div class="tab-content">
		<span class="heading">Orientation Day</span>
		<br>
		<span class="heading2">Time: 15/10 (Fri) 16:00 - 17:00<br>
		Venue: Google meet<br>
		<a class="invert" href="https://meet.google.com/vec-ryhf-ztc" target="_blank">Meet Link</a>
		(Please join with personal account)</span>
		<hr>
		Do you know about randomness?
		<br>
		It sounds very mysterious, but it is one of the things that power your everyday life.
		From machine learning to securing online payments, randomness is a very important and thoroughly studied topic in Computer Science.
		<br><br>
		The SoCS is holding the O’Day on 15/10 (Fri). There will be a talk about randomness, a quiz with prizes, and some short videos about different aspects of computer science.
		<br><br>
		<div class="button" @click="tabTo('events')">&lt;&lt; Back</div>
	</div>`
	// &lt; is the "<" sign.
}