import { Page } from "..";

import PublicationVue from "./Publication.vue";

Page.content.cards = [];

export const PublicationData: {
	title: string,
	chinese: string,
	english: string,
	imageSrc: string,
}[] = [];

export { PublicationVue };