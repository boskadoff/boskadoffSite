

const items = [
	{ name: "waaark", url: "https://waaark.com" },
	{ name: "minbitt", url: "https://minbitt.carrd.co/" },
	{ name: "taramin", url: "https://www.taraminart.com/" },
	{ name: "cecilia.net", url: "https://www.cecitran.me/" },
  { name: "matrices", url: "https://Matrices.net" },
	{ name: "lamy", url: "https://adrienlamy.fr/" },
		{ name: "shar", url: "https://www.sharyap.com/" },
	{ name: "crazeddd", url: "https://crazeddd.dev/" },
  { name: "deadly comics", url: "https://deadlycomics.com" },
	{ name: "codepen", url: "https://codepen.com" },
	{ name: "joshwcomeau", url: "https://www.joshwcomeau.com/" },
  { name: "catherine", url: "https://catherinebutler.com/" },
	{ name: "megabrain", url: "https://www.mackenziesoftware.com/2020/06/reuse-navigation-bar-on-multiple-pages.html" },
	{ name: "yale art", url: "https://www.art.yale.edu/" },
	{ name: "hireme", url: "https://breakfaststudio.com/" },
  { name: "neal.fun", url: "https://neal.fun" },
	{ name: "jh3y", url: "https://codepen.io/jh3y" },
	{ name: "alvero", url: "https://alvaromontoro.com/blog" },
	{ name: "pikuma", url: "https://pikuma.com/" },
	{ name: "ma5a", url: "https://ma5a.com/" },
	{ name: "plazaone", url: "https://plaza.one/" },
	{ name: "symbl", url: "https://symbl.cc/" },
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
