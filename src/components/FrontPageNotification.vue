<script setup lang="ts">
import { NotificationDBEntry } from "@/database";

const { notification } = defineProps<{
	notification: NotificationDBEntry
}>();
</script>

<template>
	<div class="c-notification">
		<h2
			v-if="notification.title"
			class="c-notification__title"
		>
			{{ notification.title }}
		</h2>
		<br>
		<div v-html="notification.content" />
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
	animation: a-notif-spin 2s ease-in-out 1s infinite, a-notif-popout 1s ease-out;
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

@keyframes a-notif-spin {
	0% { box-shadow: 0 0 7px 1px var(--colour-accent); }
	50% { box-shadow: 0 0 20px 3px var(--colour-accent); }
	100% { box-shadow: 0 0 7px 1px var(--colour-accent); }
}

@keyframes a-notif-popout {
	0% { transform: scale(0.3); opacity: 0.1; }
	100% { transform: scale(1); opacity: 1; }
}

.c-notification__title {
	margin-top: 0;
}
</style>