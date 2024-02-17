const themeButtonElements = Array.from(
    document.getElementById('theme-buttons').children
);
const colorPalette = [
	{
		"--text-color": "#c0caf5",
		"--hover-color": "#bb9af7",
		"--accent-color": "#7aa2f7",
		"--accent-color-2": "#f7768e",
		"--background-color": "#1a1b26",
	},
	{
		"--text-color": "#9fadc6",
		"--hover-color": "#9B5856",
		"--accent-color": "#28725A",
		"--accent-color-2": "#D2C7CB",
		"--background-color": "#15191d",
	},
	{
		"--text-color": "#c0caf5",
		"--hover-color": "#e0af68",
		"--accent-color": "#7aa2f7",
		"--accent-color-2": "#bb9af7",
		"--background-color": "#1a1b26",
	},
];

function setColorPalette() {

    const index = parseInt(localStorage.colorPalette);
    const isValidIndex = !isNaN(index) && index < colorPalette.length;
	const colorSet = colorPalette[isValidIndex ? index : 0];
    
	for (const [property, value] of Object.entries(colorSet)) {
		document.documentElement.style.setProperty(property, value);
	}

}

themeButtonElements.forEach((b, i) => b.onclick = () => {

    localStorage.colorPalette = i;
    setColorPalette();

});

setColorPalette();
