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
	name: "Publication"
},
{
	url: "/o-day/",
	name: "O-Day"
},
{
	url: "/programming-course/",
	name: "Courses"
}] as const;