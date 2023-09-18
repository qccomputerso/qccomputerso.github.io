export interface RoadmapDBEntry {
	date1: Date
	date2?: Date
	title: string
}

function date(year: number, month: number, day: number) {
	return new Date(year, month - 1, day);
}

export const Roadmap: RoadmapDBEntry[] = [{
	date1: date(2023, 9, 1),
	title: "Start of School Year"
},
{
	date1: date(2023, 9, 28),
	date2: date(2023, 11, 10),
	title: "HKOI course (Heat)"
},
{
	date1: date(2023, 10, 9),
	title: "Orientation Day"
},
{
	date1: date(2024, 2, 1),
	date2: date(2024, 5, 1),
	title: "Unity Game Development Course"
},
{
	date1: date(2024, 9, 1),
	date2: date(3024, 9, 1),
	title: "???"
}];