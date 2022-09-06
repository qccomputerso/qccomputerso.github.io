<script setup lang="ts">
import { onUnmounted } from "vue";

import App from "@/App.vue";
import Card from "@/components/Card.vue";

const copied: Record<string, boolean> = $ref({});
const timeouts: number[] = [];
async function copy(text: string, id: string) {
	copied[id] = true;
	await navigator.clipboard.writeText(text);
	timeouts.push(setTimeout(() => copied[id] = false, 500));
}

onUnmounted(() => {
	for (const i of timeouts) clearTimeout(i);
});
</script>

<template>
	<App>
		<Card>
			<template #header>
				Contact Us
			</template>
			<h3>Private</h3>
			<span
				class="o-link--clickable o-info-bicolumn-display"
				@click="copy('qccomputerso@gmail.com', 'email');"
			>
				<span>Email:</span><span>qccomputerso@gmail.com</span>
			</span>
			<span v-if="copied.email">(Copied)</span>
			<br>
			<br>
			<h3>Public</h3>
			<a
				class="o-link--clickable o-info-bicolumn-display"
				href="https://www.instagram.com/qc_socs/"
				target="_blank"
			>
				<span>Instagram:</span><span>@qc_socs</span>
			</a>
			<br>
			<br>
			<a href="/">
				<button>
					&lt;&lt; Homepage
				</button>
			</a>
		</Card>
	</App>
</template>

<style scoped>
.o-link--clickable {
	text-decoration: inherit;
	cursor: pointer;
	font-weight: inherit;
}
</style>