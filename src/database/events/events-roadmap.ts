export interface RoadmapDBEntry {
	date1: Date
	date2?: Date
	title: string
}

export const Roadmap: RoadmapDBEntry[] = [{
	date1: new Date(2022, 8, 1),
	title: "Start of School Year"
},
{
	date1: new Date(2022, 9, 10),
	title: "Orientation Day"
},
{
	date1: new Date(2023, 8, 1),
	date2: new Date(3023, 8, 1),
	title: "???"
}];