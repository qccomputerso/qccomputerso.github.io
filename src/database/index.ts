export interface CardDBEntry {
	title?: string
	content: string
	headerImage?: {
		href: string
		width?: number
		source?: {
			description: string
			url: string
		}
	}
}

export interface NotificationDBEntry {
	title?: string
	content: string
}

export interface PageDBentry {
	notification?: NotificationDBEntry
	cards: CardDBEntry[]
}

export interface PageData {
	content: PageDBentry
}

export const Page: PageData = {
	content: {
		cards: [{
			title: "Oops!",
			content: "Looks like something went wrong. You shouldn't be seeing this."
		}]
	}
};


export function centreText(text: string) {
	return `<div style="text-align: center;">${text}</div>`;
}

export function img(href: string, width: undefined | number = undefined) {
	return `<img ${width === undefined ? "" : `width="${width}"`} src="${href}">`;
}