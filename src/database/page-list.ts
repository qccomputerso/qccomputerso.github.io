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
}] as const;