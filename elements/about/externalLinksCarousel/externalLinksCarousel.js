

const items = [
	{ name: "dog", url: "https://dogspot.com" },
	{ name: "cat", url: "https://catplace.com" },
	{ name: "fox", url: "https://foxden.com" },
	{ name: "owl", url: "https://owlwise.org" },
  { name: "dog", url: "https://dogspot.com" },
	{ name: "cat", url: "https://catplace.com" },
	{ name: "fox", url: "https://foxden.com" },
	{ name: "owl", url: "https://owlwise.org" },
  { name: "dog", url: "https://dogspot.com" },
	{ name: "cat", url: "https://catplace.com" },
	{ name: "fox", url: "https://foxden.com" },
	{ name: "owl", url: "https://owlwise.org" },
  { name: "dog", url: "https://dogspot.com" },
	{ name: "cat", url: "https://catplace.com" },
	{ name: "fox", url: "https://foxden.com" },
	{ name: "owl", url: "https://owlwise.org" },
  { name: "dog", url: "https://dogspot.com" },
	{ name: "cat", url: "https://catplace.com" },
	{ name: "fox", url: "https://foxden.com" },
	{ name: "owl", url: "https://owlwise.org" }
	// Add more items as needed
];

const container = document.getElementById("jcardContainer");

for (const item of items) {
	const a = document.createElement("a");
	a.className = "jcard";
	a.href = item.url;
	a.target = "_blank";
	a.textContent = item.name;
	container.appendChild(a);
}
