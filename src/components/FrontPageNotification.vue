<script setup lang="ts">
import LogoImg from "@/assets/logo.png";

import { NotificationDBEntry } from "@/database";

const { notification } = defineProps<{
	notification: NotificationDBEntry
}>();
</script>

<template>
	<div
		class="c-notification"
		:style="{ '--background-image': `url('${LogoImg}')` }"
	>
		<h2
			v-if="notification.title"
			class="c-notification__title"
		>
			{{ notification.title }}
		</h2>
		<br>
		<span v-html="notification.content" />
	</div>
</template>

<style scoped>
.c-notification {
	border: 4px solid var(--colour-accent);
	box-shadow: inset 0 0 7px 1px var(--colour-background);
	border-radius: 6px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 600px;
	margin: 20px;
	padding: 30px;
	overflow: hidden;
}

.c-notification::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	background-image: var(--background-image);
	background-size: auto 80%;
	background-repeat: no-repeat;
	background-position: center center;
	animation: a-notif-bg-spin 15s linear 1s infinite, a-notif-bg-popout 1s ease-out;
	z-index: -1;
}

.c-notification::after {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: var(--colour-accent);
	opacity: 0.8;
	filter: brightness(0.6);
	z-index: -1;
}

@keyframes a-notif-bg-spin {
	0% { transform: rotate(0); }
	100% { transform: rotate(360deg); }
}

@keyframes a-notif-bg-popout {
	0% { transform: scale(0.3); opacity: 0.1; }
	100% { transform: scale(1); opacity: 1; }
}

.c-notification__title {
	margin-top: 0;
}
</style>