System.components["page-content"] = {
	data() {
		return {
			database: System.fileDatabase
		}
	},
	template: `<div class="tab invert">
		<h1 id="page-title">Programming Course Materials</h1>
		<br><br>
		<div class="tab-content">
			<a class="button" href="../">Back to main site &gt;&gt;</a>
			<br><br>
			<group-file-downloads :file-group="database.python" />
		</div>
	</div>`
}