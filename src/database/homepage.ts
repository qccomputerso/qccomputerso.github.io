import CommitteeList from "@/assets/committee-list.jpeg";

import { Page } from ".";


Page.content.notification = {
	title: "Subcom Recruitment!",
	content: `
We are currently recruiting subcommittee members for the new school year! Fill in the google form now
<a href="https://forms.gle/vjk1T9JETDSqgmj48" target="_blank">HERE</a>. For any more information you may
contact us- Details are at the bottom of the page.`
};

Page.content.cards = [{
	title: "The Orientation Day is over...",
	content: `
... But you can still retrieve the materials! Simply click on "O-Day materials", or the button
on the bottom of this card to get them. If you did not come to the O-Day, you can use these materials as
references.
<br>
<br>
<a href="/o-day/">
	<button>
		Take me there >>
	</button>
</a>`
},
{
	headerImage: {
		href: CommitteeList,
		width: 400,
	},
	title: `Welcome to our homepage!`,
	content: `
Our goal as the Society of Computer Studies is to provide insight about programming and Computer Science
to our schoolmates, and to help them gain a better understanding of the topics, as well as an understanding
of the impact of rapid development of IT on our society.
<br>
<br>
We conduct
<a href="https://qcsocs.com/program-course/" target="_blank">programming courses</a>,
as well as training for the
<a href="https://hkoi.org/en/" target="_blank">HKOI</a>
(Hong Kong Olympiad in Informatics) to achieve our aims.
<br>
<br>
<a href="/events/">
	<button>
		Events >>
	</button>
</a>`,
},
{
	title: `Events`,
	content: `
This year, we will hold a programming course which teaches C++, a strongly typed and extremely quick language
which is often used as a framework for many problems which require high computational speeds. For those who are
already experienced in programming, we may hold a mini competition which allows you to demonstrate your programming
skills!`
},
{
	title: `Officials List`,
	content: `
<b>Chairman:</b>
<div class="o-info-bicolumn-display">
	<div>Alex Wu</div>
	<div>4D (30)</div>
</div>
<br>
<b>Vice Chairman:</b>
<div class="o-info-bicolumn-display">
	<div>Edison Fu</div>
	<div>4A (10)</div>
	<div>Kyle Chen</div>
	<div>5A (04)</div>
</div>
<br>
<b>Committees:</b>
<div class="o-info-bicolumn-display">
	<div>Chan Ching Kiu</div>
	<div>3A (02)</div>
	<div>Mike Lam</div>
	<div>4A (17)</div>
	<div>Anson Yeung</div>
	<div>4A (35)</div>
	<div>Arthur Pang</div>
	<div>5A (19)</div>
	<div>Kevin Li</div>
	<div>5B (19)</div>
</div>
<br>
<a href="/contacts/">
	<button>
		Contact Us >>
	</button>
</a>`
}];