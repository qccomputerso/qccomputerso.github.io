<script setup lang="ts">
import LogoPath from "@/assets/logo.png";

import { Pages } from "@/database/page-list";

const getScroll = (function() {
	if (window.pageYOffset === undefined) {
		const scrollElement = document.documentElement || document.body;
		if (scrollElement) return () => scrollElement.scrollTop;
		return () => 0;
	}
	return () => window.pageYOffset;
}());

let scroll = $ref(0);
let maxLogoSize = $ref(80);
let maxTitleSize = $ref(2.4);
const minTitleSize = 1.5;
const logoSize = $computed(() => Math.max((1 - scroll / 150) * maxLogoSize, 0));
const titleSize = $computed(() => `${Math.max(
	(maxTitleSize - minTitleSize) * (1 - scroll / 250),
	0
) + minTitleSize}em`);

addEventListener("scroll", () => scroll = getScroll());
maxTitleSize = innerWidth < 640 ? 1.9 : 2.4;
maxLogoSize = Math.max(Math.min(innerWidth / 8, 80), 40);
addEventListener("resize", () => {
	maxTitleSize = innerWidth < 640 ? 1.9 : 2.4;
	maxLogoSize = Math.max(Math.min(innerWidth / 8, 80), 40);
});
</script>

<template>
	<div class="c-topbar">
		<span
			class="c-topbar__title"
			:style="{
				fontSize: titleSize
			}"
		>
			QC COMPUTER SOCIETY
		</span>
		<img
			class="c-topbar__logo-image"
			:src="LogoPath"
			:width="logoSize"
			:height="logoSize"
			:style="{
				opacity: logoSize / maxLogoSize * 1.4
			}"
		>
		<div class="c-topbar__tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				:href="page.url"
				class="c-topbar__tab-button"
			>{{ page.name }}</a>
		</div>
	</div>
	<div class="c-topbar c-topbar--fake">
		<span
			class="c-topbar__title"
			:style="{
				fontSize: maxTitleSize
			}"
		>
			QC SCIENCE ASSOCIATION
		</span>
		<img
			class="c-topbar__logo-image"
			:width="maxLogoSize"
			:height="maxLogoSize"
		>
		<div class="c-topbar__tab-buttons" />
	</div>
</template>

<style scoped>
.c-topbar {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	border-bottom: 5px solid var(--colour-accent);
	padding-top: 10px;
	background: linear-gradient(transparent, var(--colour-accent));
	/* Move the background upwards a little to make transparent effect instead of
	a solid colour at the bottom and none at the top */
	background-position-y: 20%;
	text-align: center;
}

.c-topbar::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-background);
	opacity: 0.5;
}

.c-topbar--fake {
	position: static;
	visibility: hidden;
}

.c-topbar__title {
	font-size: 2.4em;
	line-height: 1.2;
	font-weight: 900;
	margin: 10px;
	color: #fffb;
	text-shadow: 0 0 var(--colour-accent);
}

.c-topbar__logo-image {
	border-radius: 10%;
	border: var(--colour-text) 2px solid;
	filter: drop-shadow(var(--colour-accent) 0 0 10px) drop-shadow(var(--colour-text) 0 0 5px);
}

.c-topbar__tab-buttons {
	position: relative;
	width: 100%;
	height: 50px;
	margin-top: 10px;
	text-align: left;
}

.c-topbar__tab-buttons::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-accent);
	filter: brightness(0.8);
	opacity: 0.2;
}

.c-topbar__tab-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 100px;
	height: 100%;
	padding: 0 10px;
	border-right: 1px solid var(--colour-text);
	text-decoration: none;
	transition: color 0.1s, background-color 0.1s;
}

.c-topbar__tab-button:hover {
	background-color: var(--colour-text);
	color: var(--colour-background);
}

@media screen and (max-width: 640px) {
	.c-topbar__tab-buttons {
		height: 40px;
	}

	.c-topbar__tab-button {
		min-width: 80px;
	}
}
</style>