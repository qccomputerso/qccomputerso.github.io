<script setup lang="ts">
import LogoImg from "@/assets/logo.png";

import { NotificationDBEntry } from "@/database";

const { notification } = defineProps<{
	notification: NotificationDBEntry
}>();
</script>

<template>
	<div class="c-notification">
		<img
			class="c-notification__background"
			:src="LogoImg"
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

.c-notification__background {
	position: absolute;
	inset: 50%;
	height: 80%;
	border-radius: 5%;
	border: 3px solid var(--colour-accent);
	box-shadow: 0 0 7px var(--colour-accent);
	background-size: auto 80%;
	background-repeat: no-repeat;
	background-position: center center;
	animation: a-notif-bg-spin 2s ease-in-out 1s infinite, a-notif-bg-popout 1s ease-out;
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
	0% { transform: translate(-50%, -50%) rotate(0); }
	23% { transform: translate(-50%, -50%) rotate(20deg); }
	46% { transform: translate(-50%, -50%) rotate(-15deg); }
	69% { transform: translate(-50%, -50%) rotate(10deg); }
	90% { transform: translate(-50%, -50%) rotate(0deg); }
	100% { transform: translate(-50%, -50%) rotate(0deg); }
}

@keyframes a-notif-bg-popout {
	0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0.1; }
	100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

.c-notification__title {
	margin-top: 0;
}
</style>