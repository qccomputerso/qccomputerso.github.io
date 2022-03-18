System.components["single-file-download"] = {
	props: {
		file: {
			type: Object,
			required: true
		}
	},
	template: `<a
		class="download-link"
		:href="'materials/' + file.path"
		:download="file.downloadName"
	>{{ file.title }}</a>`
}