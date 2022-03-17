System.components["all-file-downloads"] = {
	data() {
		return {
			database: System.fileDatabase
		}
	},
	template: `<div class="tab invert">
		<h1 id="page-title">Programming Course Materials</h1>
		<br><br>
		<group-file-downloads :file-group="database.python" />
	</div>`
}