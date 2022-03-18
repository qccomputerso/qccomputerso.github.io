System.components["group-file-downloads"] = {
	props: {
		fileGroup: {
			type: Object,
			required: true
		}
	},
	template: `<div>
		<span class="heading2">{{ fileGroup.groupName }}</span>
		<hr>
		<single-file-download
			v-for="file in fileGroup.files"
			:key="file.downloadName"
			:file="file"
		/>
		<br>
		<br>
	</div>`
}