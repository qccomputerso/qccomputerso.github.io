<script setup lang="ts">
import { useSlots } from "vue";

import type { CardDBEntry } from "@/database";

const { card } = defineProps<{
	card?: CardDBEntry
}>();

const slots = useSlots();
const hasSlot = (name: string) => Boolean(slots[name]);
</script>

<template>
	<div class="c-paragraph-card">
		<template v-if="card">
			<div
				v-if="card.headerImage"
				class="c-paragraph-card__header-image"
			>
				<img
					:src="card.headerImage.href"
					:width="card.headerImage.width"
				>
				<a
					v-if="card.headerImage.source"
					target="_blank"
					:href="card.headerImage.source.url"
				>
					Source: {{ card.headerImage.source.description }}
				</a>
			</div>
			<h2
				v-if="card.title"
				class="c-paragraph-card__title"
				v-html="card.title"
			/>
			<div
				class="c-paragraph-card__content"
				v-html="card.content"
			/>
		</template>
		<template v-else>
			<h2
				v-if="hasSlot('header')"
				class="c-paragraph-card__title"
			>
				<slot name="header" />
			</h2>
			<div class="c-paragraph-card__content">
				<slot />
			</div>
		</template>
	</div>
</template>

<style scoped>
.c-paragraph-card {
	position: relative;
	max-width: 960px;
	width: calc(100vw - 40px);
	padding: 30px;
	margin: 20px;
	border-radius: 10px;
	background-color: rgba(137, 119, 185, 0.1);
	text-shadow: 0 0 var(--colour-accent);
	line-height: 1.6;
}

.c-paragraph-card::before {
	content: "";
	border-radius: inherit;
	position: absolute;
	width: 100%;
	height: 100%;
	inset: 0;
	z-index: -1;
	background-color: rgba(137, 119, 185, 0.1);
	animation: a-hue-rotate 10s linear infinite;
}

@keyframes a-hue-rotate {
	0% { filter: hue-rotate(0); }
	100% { filter: hue-rotate(360deg); }
}

.c-paragraph-card :deep(img) {
	display: block;
	margin: 0 auto;
	border-radius: 10px;
	max-width: 100%;
}

.c-paragraph-card__header-image {
	text-align: center;
	font-style: italic;
	font-size: 12px;
	margin-bottom: 10px;
}

.c-paragraph-card__title {
	border-bottom: 2px solid var(--colour-accent);
	margin-top: 0;
	padding-bottom: 10px;
}

.c-paragraph-card__content {
	font-weight: 300;
}
</style>