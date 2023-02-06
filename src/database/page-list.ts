export interface PageDBEntry {
	url: string
	name: string
}

export const Pages = [{
	url: "/",
	name: "Home"
},
{
	url: "/events/",
	name: "Events"
},
{
	url: "/contacts/",
	name: "Contact Us"
},
{
	url: "/publication/",
	name: "True or Not True"
},
{
	url: "/o-day/",
	name: "O-Day Materials"
},
{
	url: "/programming-course/",
	name: "Programming Course"
}] as const;