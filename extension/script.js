// wishlist: hAudio or RDFa markup

var nodes = document.querySelectorAll(".release");

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var artist = node.querySelectorAll(".artist").item(0).textContent.trim();
	var title = node.querySelectorAll(".title").item(0).textContent.trim();

	var link = document.createElement("a");
	link.href = "tomahawk://view/album?artist=" + encodeURIComponent(artist) + "&name=" + encodeURIComponent(title);
	link.innerHTML = "▶ Tomahawk";
	link.style.background = "url(http://www.tomahawk-player.org/sites/default/files/favicon.ico) no-repeat";
	link.style.paddingLeft = "20px";

	var container = document.createElement("div");
	container.appendChild(link);

	node.appendChild(container);
}