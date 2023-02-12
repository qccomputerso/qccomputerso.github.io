<script setup lang="ts">
import App from "@/App.vue";
import Card from "@/components/Card.vue";

import { PublicationData } from ".";

const isChinese = $ref(false);
</script>

<template>
	<App>
		<Card
			v-for="publication in PublicationData"
			:key="publication.title"
		>
			<template #header>
				{{ publication.title }}
				<div
					class="c-switch-language"
					@click="isChinese = !isChinese;"
				>
					<span
						:class="{
							'c-switch-language__button': true,
							'c-switch-language__button--inactive': isChinese,
						}"
					>
						Eng
					</span>
					<span
						:class="{
							'c-switch-language__button': true,
							'c-switch-language__button--inactive': !isChinese,
						}"
					>
						中
					</span>
				</div>
			</template>
			<img
				class="c-publication-image"
				:src="publication.imageSrc"
				width="250"
			>
			<span v-html="isChinese ? publication.chinese : publication.english" />
		</Card>
	</App>
</template>

<style scoped>
.c-publication-image {
	float: right;
	clear: right;
	margin: 10px;
}

.c-switch-language {
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 18px;
	font-weight: normal;
	cursor: pointer;
	user-select: none;
}

.c-switch-language__button {
	margin: 10px 5px;
}

.c-switch-language__button--inactive {
	opacity: 0.5;
}
</style>