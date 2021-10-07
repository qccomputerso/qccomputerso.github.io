const tabData = {
	opened: "",
	tabButtons: [
		{
			buttonText: 'Home',
			choices: [{
				text: 'Home',
				onClick() {
					tabTo("home");
				},
			}, {
				text: 'Events',
				onClick() {
					tabTo("events")
				},
			}]
		},
		{
			buttonText: 'Contact Us',
			choices: [{
				text: 'Contact Info',
				onClick() {
					tabTo("contacts");
				},
			}]
		}
	],
	tab: "Home"
};

function tabTo(tab) {
	location.hash = "#" + tab;
}
function openWindow(link) {
	// Don't ask me why this works, it just does
	window.open(link, '_blank').focus();
}

window.addEventListener("hashchange", function(e) {
	tabData.tab = e.newURL.split("#")[1];
})