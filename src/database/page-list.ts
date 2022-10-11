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
	url: "/o-day/",
	name: "O-Day Materials"
}] as const;