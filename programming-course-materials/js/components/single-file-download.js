System.components["single-file-download"] = {
	props: {
		file: {
			type: Object,
			required: true
		}
	},
	template: `<a
		class="inverted"
		:href="'materials/' + file.path"
		:download="file.downloadName"
	>{{ file.title }}</a>`
}