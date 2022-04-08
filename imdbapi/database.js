function addScript(src) { var s = document.createElement('script'); s.src = src; document.head.appendChild(s); }
window.imdb$foo = function (results) {
	/* ... */
};
addScript('https://sg.media-imdb.com/suggests/f/foo.json');