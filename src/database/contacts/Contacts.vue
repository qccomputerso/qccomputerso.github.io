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
				Online Resources
			</template>
			<h3>Private</h3>
			<div
				class="o-link--clickable o-info-bicolumn-display"
				@click="copy('qccomputerso@gmail.com', 'email');"
			>
				<div>Email:</div><div>qccomputerso@gmail.com</div>
			</div>
			<i v-if="copied.email">(Copied)</i>
			<br>
			<br>
			<h3>Public</h3>
			<a
				class="o-link--clickable o-info-bicolumn-display"
				href="https://www.instagram.com/qc_socs/"
				target="_blank"
			>
				<div>Instagram:</div><div>@qc_socs</div>
			</a>
			<br>
			<br>
			If you wish to contact us in-person, you may refer to the officials list shown below for more
			details. We may be available before school, during recesses, or during lunch.
			<br>
			<br>
			<a href="/">
				<button>
					&lt;&lt; Homepage
				</button>
			</a>
		</Card>
		<Card>
			<template #header>
				Officials List
			</template>
			<b>Chairman:</b>
			<div class="o-info-bicolumn-display">
				<div>Alex Wu</div>
				<div>4D (30)</div>
			</div>
			<br>
			<b>Vice Chairman:</b>
			<div class="o-info-bicolumn-display">
				<div>Edison Fu</div>
				<div>4A (10)</div>
				<div>Kyle Chen</div>
				<div>5A (04)</div>
			</div>
			<br>
			<b>Committees:</b>
			<div class="o-info-bicolumn-display">
				<div>Chan Ching Kiu</div>
				<div>3A (02)</div>
				<div>Mike Lam</div>
				<div>4A (17)</div>
				<div>Anson Yeung</div>
				<div>4A (35)</div>
				<div>Arthur Pang</div>
				<div>5A (19)</div>
				<div>Kevin Li</div>
				<div>5B (19)</div>
			</div>
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