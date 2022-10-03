<script setup lang="ts">
import { Roadmap, RoadmapDBEntry } from "./events-roadmap";

import App from "@/App.vue";
import Card from "@/components/Card.vue";

interface RoadmapVueEntry extends RoadmapDBEntry {
	lastSpacing: number
	totalSpacing: number
}

const roadmapEntries: RoadmapVueEntry[] = [];
const currentTime = Date.now();
let timeSpacing = 0;
for (let idx = 0; idx < Roadmap.length; idx++) {
	const event = Roadmap[idx];
	const space = idx === 0 ? 0 : Math.log2(event.date1.getTime() - Roadmap[idx - 1].date1.getTime()) * 10 - 205;
	if (currentTime <= event.date1.getTime() && !timeSpacing) {
		timeSpacing = roadmapEntries[idx - 1].totalSpacing + space *
			(1 - (event.date1.getTime() - currentTime) / (event.date1.getTime() - Roadmap[idx - 1].date1.getTime()));
	}
	roadmapEntries.push({
		...event,
		lastSpacing: space,
		totalSpacing: idx === 0 ? 25 : roadmapEntries[idx - 1].totalSpacing + space
	});
}
const totalLength = roadmapEntries[roadmapEntries.length - 1].totalSpacing;
if (!timeSpacing) timeSpacing = totalLength;
</script>

<template>
	<App>
		<Card>
			<template #header>
				Roadmap of Events
			</template>
			<h4>
				NOTE: Most of the events here are still tentative, as the school year has only just started.
				Events may be added, removed, or changed in due course. Do not use this as an absolute guide
				to our year plan just yet.
			</h4>
			<div class="c-svg-container">
				<svg
					class="c-svg-el"
					:height="totalLength + 50"
				>
					<line
						x1="20"
						x2="20"
						y1="25"
						:y2="totalLength"
						class="c-central-line"
					/>
					<line
						x1="20"
						x2="20"
						y1="25"
						:y2="timeSpacing"
						class="c-central-line--time-spacing"
					/>
					<g
						v-for="(event, eventId) in roadmapEntries"
						:key="eventId"
					>
						<foreignObject
							x="0"
							:y="event.totalSpacing - 50"
							width="100%"
							height="100"
						>
							<div
								class="c-event-text"
								:style="{
									color: timeSpacing >= event.totalSpacing ? '#e8ecad' : 'var(--colour-accent)'
								}"
							>
								{{ event.date1.toLocaleDateString(undefined,
									{ year: "numeric", month: "2-digit", day: "2-digit" }
								) +
									(event.date2 ? ` - ${event.date2.toLocaleDateString(undefined,
										{ year: "numeric", month: "2-digit", day: "2-digit" }
									)}` : "") }}:
								{{ event.title }}
								<b
									v-if="(event.date2 || event.date1).getTime() - currentTime > 0 &&
										event.date1.getTime() - currentTime < 84600 * 1000 * 2"
									class="c-event-text__exclaim"
								>
									!
								</b>
							</div>
						</foreignObject>
						<circle
							cx="20"
							:cy="event.totalSpacing"
							r="8"
							class="c-event-point"
							:style="{
								stroke: timeSpacing >= event.totalSpacing ? '#e8ec0d' : 'var(--colour-accent)'
							}"
						/>
					</g>
				</svg>
			</div>
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
.c-svg-container {
	width: 100%;
	max-width: 600px;
	margin: auto;
}

.c-svg-el {
	width: 100%;
}
.c-central-line {
	stroke-width: 5;
	stroke: var(--colour-accent);
}

.c-central-line--time-spacing {
	stroke-width: 5;
	stroke: #e8ec0d;
	stroke-linecap: round;
}

.c-event-point {
	stroke-width: 6;
	fill: var(--colour-background);
}

.c-event-text {
	max-width: calc(100% - 50px);
	position: relative;
	top: 50%;
	left: 40px;
	font-weight: 300;
	text-shadow: none;
	transform: translateY(-50%);
}

.c-event-text__exclaim {
	color: rgb(255, 127, 68);
	position: relative;
	display: inline-block;
	font-size: 1.6em;
	line-height: 0;
	vertical-align: middle;
}

.c-event-text__exclaim::before {
	content: "!";
	position: absolute;
	inset: 0;
	animation: a-exclaim 1s infinite ease-out;
}

@keyframes a-exclaim {
	0% { transform: scale(3); opacity: 0.8; }
	80% { transform: scale(0.8); opacity: 0; }
	100% { transform: scale(0.8); opacity: 0; }
}
</style>