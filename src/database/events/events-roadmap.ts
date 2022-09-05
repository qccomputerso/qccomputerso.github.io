export interface RoadmapDBEntry {
	date: Date
	title: string
}

export const Roadmap: RoadmapDBEntry[] = [{
	date: new Date(2022, 8, 1),
	title: "Start of School Year"
},
{
	date: new Date(2023, 8, 1),
	title: "Start of next School Year"
}];